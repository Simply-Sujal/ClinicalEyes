from typing import List
from fastapi import APIRouter, Depends, HTTPException
from starlette.status import HTTP_200_OK, HTTP_201_CREATED, HTTP_500_INTERNAL_SERVER_ERROR
import logging
from app.service.contactus_service import ContactUsService
from app.schemas.contactus import ContactUsCreate, ContactUsResponse
from app.utils.get_service_obj import get_contactus_service_obj

logger = logging.getLogger(__name__)

router = APIRouter()

@router.post("/", response_model=ContactUsResponse, status_code=HTTP_201_CREATED)
def create_contactus(contactus: ContactUsCreate, contactus_service: ContactUsService = Depends(get_contactus_service_obj)):
    """
        Create a new contactus
    """
    try:
        contactus = contactus_service.create_contactus(contactus)
        return contactus
    except HTTPException as e:
        raise e
    except Exception as e:
        logger.error(f"Error in create_contactus: {str(e)}", exc_info=True)
        raise HTTPException(status_code=HTTP_500_INTERNAL_SERVER_ERROR, detail=f"Failed to create contact request: {str(e)}")

@router.get("/", response_model=List[ContactUsResponse], status_code=HTTP_200_OK)
def get_contactus(contactus_service: ContactUsService = Depends(get_contactus_service_obj)):
    """
        Get all the contactus
    """
    try:
        contactus = contactus_service.get_contactus()
        return contactus
    except HTTPException as e:
        raise e
    except Exception as e:
        logger.error(f"Error in get_contactus: {str(e)}", exc_info=True)
        raise HTTPException(status_code=HTTP_500_INTERNAL_SERVER_ERROR, detail=f"Failed to retrieve contact requests: {str(e)}")

@router.get("/{contactus_id}", response_model=ContactUsResponse, status_code=HTTP_200_OK)
def get_contactus_by_id(contactus_id: int, contactus_service: ContactUsService = Depends(get_contactus_service_obj)):
    """
        Get a single contactus by id
    """
    try:
        contactus = contactus_service.get_contactus_by_id(contactus_id)
        return contactus
    except HTTPException as e:
        raise e
    except Exception as e:
        logger.error(f"Error in get_contactus_by_id: {str(e)}", exc_info=True)
        raise HTTPException(status_code=HTTP_500_INTERNAL_SERVER_ERROR, detail=f"Failed to retrieve contact request: {str(e)}")
        
@router.delete("/{contactus_id}", response_model=ContactUsResponse, status_code=HTTP_200_OK)
def delete_contactus(contactus_id: int, contactus_service: ContactUsService = Depends(get_contactus_service_obj)):
    """
        Delete a contactus
    """
    try:
        contactus = contactus_service.delete_contactus(contactus_id)
        return contactus
    except HTTPException as e:
        raise e
    except Exception as e:
        logger.error(f"Error in delete_contactus: {str(e)}", exc_info=True)
        raise HTTPException(status_code=HTTP_500_INTERNAL_SERVER_ERROR, detail=f"Failed to delete contact request: {str(e)}")