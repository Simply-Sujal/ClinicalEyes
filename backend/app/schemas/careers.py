from datetime import datetime
from typing import Optional
from pydantic import BaseModel, Field

class CareerBase(BaseModel):
    title : str = Field(description="Title of the career", min_length=2, max_length=100)
    description : str = Field(description="Description of the career", min_length=2, max_length=2000)
    location : str = Field(description="Location of the career", min_length=2, max_length=100)
    experience : str = Field(description="Experience of the career", min_length=2, max_length=100)

class CareerCreate(CareerBase):
    pass

class CareerUpdate(CareerBase):
    pass

class CareerPatch(BaseModel):
    title : Optional[str] = Field(None, description="Title of the career", min_length=2, max_length=100)
    description : Optional[str] = Field(None, description="Description of the career", min_length=2, max_length=2000)
    location : Optional[str] = Field(None, description="Location of the career", min_length=2, max_length=100)
    experience : Optional[str] = Field(None, description="Experience of the career", min_length=2, max_length=100)

class CareerResponse(CareerBase):
    id: int = Field(description="ID of the career")
    created_at: datetime = Field(description="Created at")
    updated_at: datetime | None = Field(default=None, description="Updated at")

    class Config:
        from_attributes = True