from sqlalchemy import Column, Integer, String, DateTime, func
from ..db.db import Base

class ContactUs(Base):
    __tablename__ = "contact_us"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    email = Column(String, nullable=False)
    message = Column(String, nullable=True)
    contact_number = Column(String, nullable=True)
    created_at = Column(DateTime(timezone=True), default=func.now())  
    updated_at = Column(DateTime(timezone=True), default=func.now(), onupdate=func.now())