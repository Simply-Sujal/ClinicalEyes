from pydantic import BaseModel, Field
from datetime import datetime

class ContactUsCreate(BaseModel):
    name: str = Field(description="Name of the user", min_length=2, max_length=100)
    email: str = Field(description="Email of the user", min_length=2, max_length=100)
    contact_number: str = Field(description="Phone number of the user", max_length=13)
    message: str = Field(description="Message of the user", min_length=2, max_length=2000)

class ContactUsResponse(ContactUsCreate):
    id: int = Field(description="ID of the user")
    created_at: datetime = Field(description="Created at")
    updated_at: datetime | None = Field(default=None, description="Updated at")

    class Config:
        from_attributes = True