from fastapi import APIRouter, Depends, HTTPException
from typing import List
from starlette.status import HTTP_200_OK, HTTP_201_CREATED, HTTP_500_INTERNAL_SERVER_ERROR
import logging
from app.service.career_service import CareerService
from app.schemas.careers import CareerCreate, CareerUpdate, CareerPatch, CareerResponse
from app.utils.get_service_obj import get_career_service_obj

logger = logging.getLogger(__name__)

router = APIRouter()

@router.post("/", response_model=CareerResponse, status_code=HTTP_201_CREATED)
def create_career(career: CareerCreate, career_service: CareerService = Depends(get_career_service_obj)):
    """
        Create a new career
    """
    try:
        career = career_service.create_career(career)
        return career
    except HTTPException as e:
        raise e
    except Exception as e:
        logger.error(f"Error in create_career: {str(e)}", exc_info=True)
        raise HTTPException(status_code=HTTP_500_INTERNAL_SERVER_ERROR, detail=f"Failed to create career: {str(e)}")

@router.get("/", response_model=List[CareerResponse], status_code=HTTP_200_OK)
def get_careers(career_service: CareerService = Depends(get_career_service_obj)):
    """
        Get all the careers
    """
    try:
        careers = career_service.get_careers()
        return careers
    except HTTPException as e:
        raise e
    except Exception as e:
        logger.error(f"Error in get_careers: {str(e)}", exc_info=True)
        raise HTTPException(status_code=HTTP_500_INTERNAL_SERVER_ERROR, detail=f"Failed to retrieve careers: {str(e)}")      

@router.get("/{career_id}", response_model=CareerResponse, status_code=HTTP_200_OK)
def get_career(career_id: int, career_service: CareerService = Depends(get_career_service_obj)):
    """
        Get a single career by id
    """
    try:
        career = career_service.get_career(career_id)
        return career
    except HTTPException as e:
        raise e
    except Exception as e:
        logger.error(f"Error in get_career: {str(e)}", exc_info=True)
        raise HTTPException(status_code=HTTP_500_INTERNAL_SERVER_ERROR, detail=f"Failed to retrieve career: {str(e)}")  

@router.put("/{career_id}", response_model=CareerResponse, status_code=HTTP_200_OK)
def update_career(career_id: int, career_data: CareerUpdate, career_service: CareerService = Depends(get_career_service_obj)):
    """
        Update a career
    """
    try:
        career = career_service.update_career(career_id, career_data)
        return career
    except HTTPException as e:
        raise e
    except Exception as e:
        logger.error(f"Error in update_career: {str(e)}", exc_info=True)
        raise HTTPException(status_code=HTTP_500_INTERNAL_SERVER_ERROR, detail=f"Failed to update career: {str(e)}")  

@router.patch("/{career_id}", response_model=CareerResponse, status_code=HTTP_200_OK)
def patch_career(career_id: int, career_data: CareerPatch, career_service: CareerService = Depends(get_career_service_obj)):
    """
        Partially update a career
    """
    try:
        career = career_service.patch_career(career_id, career_data)
        return career
    except HTTPException as e:
        raise e
    except Exception as e:
        logger.error(f"Error in patch_career: {str(e)}", exc_info=True)
        raise HTTPException(status_code=HTTP_500_INTERNAL_SERVER_ERROR, detail=f"Failed to patch career: {str(e)}")  

@router.delete("/{career_id}", response_model=CareerResponse, status_code=HTTP_200_OK)
def delete_career(career_id: int, career_service: CareerService = Depends(get_career_service_obj)):
    """
        Delete a career
    """
    try:
        career = career_service.delete_career(career_id)
        return career
    except HTTPException as e:
        raise e
    except Exception as e:
        logger.error(f"Error in delete_career: {str(e)}", exc_info=True)
        raise HTTPException(status_code=HTTP_500_INTERNAL_SERVER_ERROR, detail=f"Failed to delete career: {str(e)}")  

    