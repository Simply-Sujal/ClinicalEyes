from typing import List
from fastapi import APIRouter, Depends, HTTPException
from starlette.status import HTTP_200_OK, HTTP_201_CREATED, HTTP_500_INTERNAL_SERVER_ERROR
import logging
from app.service.newsletter_service import NewsLetterService
from app.schemas.newsletter import NewsletterCreate, NewsletterResponse
from app.utils.get_service_obj import get_newsletter_service_obj

logger = logging.getLogger(__name__)

router = APIRouter()

@router.post("/", response_model=NewsletterResponse, status_code=HTTP_201_CREATED)
def create_newsletter(newsletter: NewsletterCreate, newsletter_service: NewsLetterService = Depends(get_newsletter_service_obj)):
    """
        Subscribe to newsletter
    """
    try:
        newsletter = newsletter_service.create_newsletter(newsletter)
        return newsletter
    except HTTPException as e:
        raise e
    except Exception as e:
        logger.error(f"Error in create_newsletter: {str(e)}", exc_info=True)
        raise HTTPException(status_code=HTTP_500_INTERNAL_SERVER_ERROR, detail=f"Failed to subscribe to newsletter: {str(e)}")

@router.get("/", response_model=List[NewsletterResponse], status_code=HTTP_200_OK)
def get_all_subscribed_emails(newsletter_service: NewsLetterService = Depends(get_newsletter_service_obj)):
    """
        Get all the emails of the subscribed users
    """
    try:
        all_emails = newsletter_service.get_all_subscribed_emails()
        return all_emails
    except HTTPException as e:
        raise e
    except Exception as e:
        logger.error(f"Error in get_all_subscribed_emails: {str(e)}", exc_info=True)
        raise HTTPException(status_code=HTTP_500_INTERNAL_SERVER_ERROR, detail=f"Failed to retrieve newsletter subscriptions: {str(e)}")