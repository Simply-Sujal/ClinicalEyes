from fastapi import Depends
from sqlalchemy.orm import Session
from app.db.db import get_db
from app.service.blogservice import BlogService 
from app.service.newsletter_service import NewsLetterService
from app.service.career_service import CareerService
from app.service.contactus_service import ContactUsService

def get_service_obj(db: Session = Depends(get_db)) -> BlogService:
    """
        Get blog service object
    """
    return BlogService(db)


def get_newsletter_service_obj(db: Session = Depends(get_db)) -> NewsLetterService:
    """
        Get newsletter service object
    """
    return NewsLetterService(db)


def get_career_service_obj(db: Session = Depends(get_db)) -> CareerService:
    """
        Get career service object
    """
    return CareerService(db)
    

def get_contactus_service_obj(db: Session = Depends(get_db)) -> ContactUsService:
    """
        Get contactus service object
    """
    return ContactUsService(db)

