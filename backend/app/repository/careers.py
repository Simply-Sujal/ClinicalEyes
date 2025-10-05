from fastapi import HTTPException
from sqlalchemy.orm import Session
from starlette.status import HTTP_404_NOT_FOUND, HTTP_500_INTERNAL_SERVER_ERROR
from ..models.careers import Career
from ..schemas.careers import CareerCreate, CareerUpdate, CareerPatch
import logging

logger = logging.getLogger(__name__)

class CareerRepository:
    """
        Career repository class
    """

    def create_career(self, db: Session, career: CareerCreate):
        """
            Create a new career for the company.
        """
        try:
            new_career = Career(
                title = career.title,
                description = career.description,
                location = career.location,
                experience = career.experience
            )

            db.add(new_career)
            db.commit()
            db.refresh(new_career)
            return new_career
        except Exception as e:
            db.rollback()
            logger.error(f"Failed to create career: {str(e)}", exc_info=True)
            raise HTTPException(status_code=HTTP_500_INTERNAL_SERVER_ERROR, detail="Database error occurred while creating career")

    def get_careers(self, db: Session):
        """
            Get all the careers for the company.
        """
        try:
            careers = db.query(Career).all()
            return careers
        except Exception as e:
            logger.error(f"Failed to get careers: {str(e)}", exc_info=True)
            raise HTTPException(status_code=HTTP_500_INTERNAL_SERVER_ERROR, detail="Database error occurred while retrieving careers")

    def get_career(self, db: Session, career_id: int):
        """
            Get a single career by id
        """
        try:
            career = db.query(Career).filter(Career.id == career_id).first()
            if not career:
                raise HTTPException(status_code=HTTP_404_NOT_FOUND, detail=f"Career not found for {career_id}")
            return career
        except HTTPException:
            raise
        except Exception as e:
            logger.error(f"Failed to get career: {str(e)}", exc_info=True)
            raise HTTPException(status_code=HTTP_500_INTERNAL_SERVER_ERROR, detail="Database error occurred while retrieving career")

    def update_career(self, db: Session, career_id: int, career_data: CareerUpdate):
        """
            Update a single career by id
        """
        try:
            career = db.query(Career).filter(Career.id == career_id).first()
            if not career:
                raise HTTPException(status_code=HTTP_404_NOT_FOUND, detail=f"Career not found for {career_id}")
            career.title = career_data.title
            career.description = career_data.description
            career.location = career_data.location
            career.experience = career_data.experience
            db.commit()
            db.refresh(career)
            return career
        except HTTPException:
            raise
        except Exception as e:
            db.rollback()
            logger.error(f"Failed to update career: {str(e)}", exc_info=True)
            raise HTTPException(status_code=HTTP_500_INTERNAL_SERVER_ERROR, detail="Database error occurred while updating career")

    def patch_career(self, db: Session, career_id: int, career_data: CareerPatch):
        """
            Partially update a single career by id
        """
        try:
            career = db.query(Career).filter(Career.id == career_id).first()
            if not career:
                raise HTTPException(status_code=HTTP_404_NOT_FOUND, detail=f"Career not found for {career_id}")
            if career_data.title is not None:
                career.title = career_data.title
            if career_data.description is not None:
                career.description = career_data.description
            if career_data.location is not None:
                career.location = career_data.location
            if career_data.experience is not None:
                career.experience = career_data.experience
            db.commit()
            db.refresh(career)
            return career   
        except HTTPException:
            raise
        except Exception as e:
            db.rollback()
            logger.error(f"Failed to patch career: {str(e)}", exc_info=True)
            raise HTTPException(status_code=HTTP_500_INTERNAL_SERVER_ERROR, detail="Database error occurred while patching career")

    def delete_career(self, db: Session, career_id: int):
        """
            Delete a single career by id
        """
        try:
            career = db.query(Career).filter(Career.id == career_id).first()
            if not career:
                raise HTTPException(status_code=HTTP_404_NOT_FOUND, detail=f"Career not found for {career_id}")
            db.delete(career)
            db.commit()
            return career
        except HTTPException:
            raise
        except Exception as e:
            db.rollback()
            logger.error(f"Failed to delete career: {str(e)}", exc_info=True)
            raise HTTPException(status_code=HTTP_500_INTERNAL_SERVER_ERROR, detail="Database error occurred while deleting career")
    