from sqlalchemy.orm import Session 
from fastapi import HTTPException
from starlette.status import HTTP_404_NOT_FOUND, HTTP_500_INTERNAL_SERVER_ERROR
from ..models.contactus import ContactUs
from ..schemas.contactus import ContactUsCreate
import logging

logger = logging.getLogger(__name__)

class ContactUsRepository:
    """
        ContactUs repository class
    """

    def create_contactus(self, db: Session, contactus: ContactUsCreate):
        """
            Create a new contactus
        """
        try:
            new_contactus = ContactUs(
                name = contactus.name,  
                email = contactus.email,
                contact_number = contactus.contact_number,
                message = contactus.message
            )

            db.add(new_contactus)
            db.commit()
            db.refresh(new_contactus)
            return new_contactus
        except Exception as e:
            db.rollback()
            logger.error(f"Failed to create contactus: {str(e)}", exc_info=True)
            raise HTTPException(status_code=HTTP_500_INTERNAL_SERVER_ERROR, detail="Database error occurred while creating contact request")

    def get_contactus(self, db: Session):
        """
            Get all the contactus
        """
        try:
            contactus = db.query(ContactUs).all()
            return contactus
        except Exception as e:
            logger.error(f"Failed to get contactus: {str(e)}", exc_info=True)
            raise HTTPException(status_code=HTTP_500_INTERNAL_SERVER_ERROR, detail="Database error occurred while retrieving contact requests")
        
    def get_contactus_by_id(self, db: Session, contactus_id: int):
        """
            Get a single contactus by id
        """
        try:
            contactus = db.query(ContactUs).filter(ContactUs.id == contactus_id).first()
            if not contactus:
                raise HTTPException(status_code=HTTP_404_NOT_FOUND, detail=f"Contact request not found for id: {contactus_id}")
            return contactus
        except HTTPException:
            raise
        except Exception as e:
            logger.error(f"Failed to get contactus: {str(e)}", exc_info=True)
            raise HTTPException(status_code=HTTP_500_INTERNAL_SERVER_ERROR, detail="Database error occurred while retrieving contact request")
        
    def delete_contactus(self, db: Session, contactus_id: int):
        """
            Delete a single contactus by id
        """
        try:
            contactus = db.query(ContactUs).filter(ContactUs.id == contactus_id).first()
            if not contactus:
                raise HTTPException(status_code=HTTP_404_NOT_FOUND, detail=f"Contact request not found for id: {contactus_id}")
            db.delete(contactus)
            db.commit() 
            return contactus
        except HTTPException:
            raise
        except Exception as e:
            db.rollback()
            logger.error(f"Failed to delete contactus: {str(e)}", exc_info=True)
            raise HTTPException(status_code=HTTP_500_INTERNAL_SERVER_ERROR, detail="Database error occurred while deleting contact request")
        