from fastapi import FastAPI
import os

from app.router import v1_router

app = FastAPI(title="Clinical Eyes", description="Clinical Eyes API", version="1.0.0")

# including routes
app.include_router(v1_router)

# Only create tables if DATABASE_URL is available and not in serverless environment
if os.getenv('DATABASE_URL') and not os.getenv('VERCEL'):
    try:
        from app.db.db import Base, engine
        Base.metadata.create_all(bind=engine)
        print("Database tables created successfully")
    except Exception as e:
        print(f"Database connection issue: {e}")

@app.get("/")
def home():
    return {"message": "The health check is successful!"}

@app.get("/health")
def health_check():
    return {"status": "healthy", "message": "API is running"}
