from sqlalchemy.orm import Session
from app.schemas.newsletter import NewsletterCreate
from ..repository.newsletter import NewsLetterRepository
import logging 

logger = logging.getLogger(__name__)

class NewsLetterService:
    """
        NewsLetter service class.
    """

    def __init__(self, db:Session):
        self.db = db
        self.newsletter_repository = NewsLetterRepository()

    def create_newsletter(self, newsletter: NewsletterCreate):
        """
            Subscribe to newsletter
        """
        try:
            return self.newsletter_repository.create_newsletter(self.db, newsletter)
        except Exception as e:
            logger.error(f"Repository error: {str(e)}")
            raise

    def get_all_subscribed_emails(self):
        """
            Get all the emails of the subscribed users
        """
        try:
            return self.newsletter_repository.get_all_subscribed_emails(self.db)
        except Exception as e:
            logger.error(f"Repository error: {str(e)}")
            raise