import os
import re
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from dotenv import load_dotenv

load_dotenv()

# Get database URL from environment
DATABASE_URL = os.getenv('DATABASE_URL', 'postgresql://sujal:sujal12345@localhost/clinicaleyes')

# Convert async URL to sync URL for NeonDB
if DATABASE_URL.startswith('postgresql+asyncpg:'):
    DATABASE_URL = re.sub(r'^postgresql\+asyncpg:', 'postgresql:', DATABASE_URL)

# Create sync engine
engine = create_engine(DATABASE_URL)

# Session maker
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()

def get_db():
    """Dependency for database sessions"""
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
