from sqlalchemy.orm import Session 
from starlette.status import HTTP_400_BAD_REQUEST, HTTP_500_INTERNAL_SERVER_ERROR
from ..models.newsletter import NewsLetter
from ..schemas.newsletter import NewsletterCreate
from fastapi import HTTPException
import logging

logger = logging.getLogger(__name__)

class NewsLetterRepository:
    """
        Newsletter repository class.
    """

    def create_newsletter(self, db: Session, newsletter: NewsletterCreate):
        """
            Subscribe to newsletter
        """
        try:
            user_email_for_newsletter = NewsLetter(
                email = newsletter.email
            )
            
            existing_email = db.query(NewsLetter).filter(NewsLetter.email == newsletter.email).first()
            if existing_email:
                raise HTTPException(status_code=HTTP_400_BAD_REQUEST, detail="Email already subscribed")
            
            db.add(user_email_for_newsletter)
            db.commit()
            db.refresh(user_email_for_newsletter)
            return user_email_for_newsletter
        except HTTPException:
            raise
        except Exception as e:
            db.rollback()
            logger.error(f"Failed to subscribe to newsletter: {str(e)}", exc_info=True)
            raise HTTPException(status_code=HTTP_500_INTERNAL_SERVER_ERROR, detail="Database error occurred while subscribing to newsletter")
            

    def get_all_subscribed_emails(self, db: Session):
        """
            Get all the emails of the subscribed users
        """
        try:
            all_emails = db.query(NewsLetter).all()
            return all_emails
        except Exception as e:
            logger.error(f"Failed to get all subscribed emails: {str(e)}", exc_info=True)
            raise HTTPException(status_code=HTTP_500_INTERNAL_SERVER_ERROR, detail="Database error occurred while retrieving newsletter subscriptions")