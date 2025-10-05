from sqlalchemy.orm import Session
from app.schemas.contactus import ContactUsCreate 
from ..repository.contactus import ContactUsRepository
import logging

logger = logging.getLogger(__name__)

class ContactUsService:
    """
        ContactUs service class
    """

    def __init__(self, db: Session):
        self.db = db
        self.contactus_repository = ContactUsRepository()

    def create_contactus(self, contactus: ContactUsCreate):
        """
            Create a new contactus
        """
        try:
            return self.contactus_repository.create_contactus(self.db, contactus)
        except Exception as e:
            logger.error(f"Repository error: {str(e)}")
            raise
        
    def get_contactus(self):
        """
            Get all the contactus
        """
        try:
            return self.contactus_repository.get_contactus(self.db)
        except Exception as e:
            logger.error(f"Repository error: {str(e)}")
            raise

    def get_contactus_by_id(self, contactus_id: int):
        """
            Get a single contactus by id
        """
        try:
            return self.contactus_repository.get_contactus_by_id(self.db, contactus_id)
        except Exception as e:
            logger.error(f"Repository error: {str(e)}")
            raise

    def delete_contactus(self, contactus_id: int):
        """
            Delete a single contactus by id
        """
        try:
            return self.contactus_repository.delete_contactus(self.db, contactus_id)
        except Exception as e:
            logger.error(f"Repository error: {str(e)}")
            raise