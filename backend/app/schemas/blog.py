from pydantic import BaseModel, Field
from datetime import datetime
from typing import Optional

class BlogBase(BaseModel):

    title : str = Field(description="Title of the blog", min_length=2, max_length=200)
    content : str = Field(description="Content of the blog", min_length=2, max_length=3000)
    author : str = Field(description="Author name", min_length=2, max_length=100)
    image_url : str = Field(default="https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", description="Image url related to blog")

class BlogCreate(BlogBase):
    pass

class BlogUpdate(BlogBase):
    pass 

class BlogPatch(BaseModel):
    title : Optional[str] = Field(None, description="Title of the blog")
    content : Optional[str] = Field(None, description="Content of the blog")
    author : Optional[str] = Field(None, description="Author name")
    image_url : Optional[str] = Field(default="https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", description="Image url related to blog")

class BlogResponse(BlogBase):
    
    id : int = Field(description="ID of the blog")
    created_at : datetime = Field(description="Created at")
    updated_at : datetime | None = Field(default=None, description="Updated at")

    class Config:
        from_attributes = True
