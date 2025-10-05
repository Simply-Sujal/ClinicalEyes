from fastapi import FastAPI

from app.router import v1_router
from app.db.db import Base, engine

app = FastAPI(title="Clinical Eyes", description="Clinical Eyes API", version="1.0.0")

# including routes
app.include_router(v1_router)

# Create tables only if not in production or if explicitly needed
try:
    Base.metadata.create_all(bind=engine)
except Exception as e:
    print(f"Database connection issue: {e}")

@app.get("/")
def home():
    return {"message": "The health check is successful!"}
