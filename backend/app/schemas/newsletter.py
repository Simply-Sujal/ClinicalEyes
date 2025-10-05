from pydantic import BaseModel, EmailStr, Field 
from datetime import datetime

class NewsletterCreate(BaseModel):
    email: EmailStr = Field(description="Email of the user who subscribed to the newsletter")

class NewsletterResponse(BaseModel):

    id: int = Field(description="ID of the user email who subscribed to the newsletter")
    email: EmailStr = Field(description="Email of the user who subscribed to the newsletter")
    created_at: datetime = Field(description="Created at")
    updated_at: datetime | None = Field(default=None, description="Updated at")

    class Config:
        from_attributes = True