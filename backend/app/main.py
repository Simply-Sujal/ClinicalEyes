from fastapi import FastAPI

from app.router import v1_router
from app.db.db import Base, engine

app = FastAPI(title="Clinical Eyes", description="Clinical Eyes API", version="1.0.0")

# including routes
app.include_router(v1_router)

Base.metadata.create_all(bind=engine)

@app.get("/")
def home():
    return {"message": "The health check is successfull!"}
