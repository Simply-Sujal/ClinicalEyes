import os
import re
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from dotenv import load_dotenv

load_dotenv()

# Get database URL from environment
DATABASE_URL = os.getenv('DATABASE_URL')
if not DATABASE_URL:
    # Provide a dummy URL for environments where DB is not yet configured
    # This allows the app to start without crashing
    DATABASE_URL = "postgresql://dummy:dummy@localhost/dummy"
    print("WARNING: DATABASE_URL not set, using dummy connection")

# Convert async URL to sync URL for NeonDB
if DATABASE_URL.startswith('postgresql+asyncpg:'):
    DATABASE_URL = re.sub(r'^postgresql\+asyncpg:', 'postgresql:', DATABASE_URL)

# Create sync engine with connection pooling for serverless
try:
    engine = create_engine(
        DATABASE_URL,
        pool_pre_ping=True,
        pool_recycle=300,
        pool_size=1,  # Minimize connections for serverless
        max_overflow=0,  # No overflow connections
        connect_args={"sslmode": "require"} if "localhost" not in DATABASE_URL and "dummy" not in DATABASE_URL else {}
    )
except Exception as e:
    print(f"Database engine creation error: {e}")
    # Create a dummy engine if connection fails
    engine = None

# Session maker
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine) if engine else None

Base = declarative_base()

def get_db():
    """Dependency for database sessions"""
    if not SessionLocal:
        raise RuntimeError("Database not configured. Please set DATABASE_URL environment variable.")
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
