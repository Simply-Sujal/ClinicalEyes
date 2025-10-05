from sqlalchemy.orm import Session
from app.schemas.careers import CareerCreate, CareerPatch, CareerUpdate
from ..repository.careers import CareerRepository
import logging 

logger = logging.getLogger(__name__)

class CareerService:
    """
        Career service class
    """

    def __init__(self, db: Session):
        self.db = db 
        self.career_repository = CareerRepository()

    def create_career(self, career: CareerCreate):
        """
            Create a new career for the company.
        """
        try:
            return self.career_repository.create_career(self.db, career)
        except Exception as e:
            logger.error(f"Repository error: {str(e)}")
            raise

    def get_careers(self):
        """
            Get all the careers for the company.
        """
        try:
            return self.career_repository.get_careers(self.db)
        except Exception as e:
            logger.error(f"Repository error: {str(e)}")
            raise

    def get_career(self, career_id: int):
        """
            Get a single career by id
        """
        try:
            return self.career_repository.get_career(self.db, career_id)
        except Exception as e:
            logger.error(f"Repository error: {str(e)}")
            raise

    def update_career(self, career_id: int, career_data: CareerUpdate):
        """
            Update a single career by id
        """
        try:
            return self.career_repository.update_career(self.db, career_id, career_data)
        except Exception as e:
            logger.error(f"Repository error: {str(e)}")
            raise

    def patch_career(self, career_id: int, career_data: CareerPatch):
        """
            Partially update a single career by id
        """
        try:
            return self.career_repository.patch_career(self.db, career_id, career_data)
        except Exception as e:
            logger.error(f"Repository error: {str(e)}")
            raise

    def delete_career(self, career_id: int):
        """
            Delete a single career by id
        """
        try:
            return self.career_repository.delete_career(self.db, career_id)
        except Exception as e:
            logger.error(f"Repository error: {str(e)}")
            raise