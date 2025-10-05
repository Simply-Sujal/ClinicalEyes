from sqlalchemy.orm import Session
from app.schemas.blog import BlogUpdate, BlogCreate, BlogPatch
from ..repository.blog import BlogRepository
import logging

logger = logging.getLogger(__name__)

class BlogService:

    def __init__(self, db: Session):
        self.db = db
        self.blog_repository = BlogRepository()

    def create_blog(self, blog: BlogCreate):
        """
            Create a new blog
        """
        try:
            return self.blog_repository.create_blog(self.db, blog)
        except Exception as e:
            logger.error(f"Repository error: {str(e)}")
            raise

    def get_blogs(self):
        """
            Get all blogs
        """
        try:
            return self.blog_repository.get_blogs(self.db)
        except Exception as e:
            logger.error(f"Repository error: {str(e)}")
            raise

    def get_blog(self, blog_id: int):
        """
            Get a blog 
        """ 
        try:
            return self.blog_repository.get_blog(self.db, blog_id)
        except Exception as e:
            logger.error(f"Repository error: {str(e)}")
            raise

    def update_blog(self, blog_id: int, blog_data: BlogUpdate):
        """
            Update a blog
        """
        try:
            return self.blog_repository.update_blog(self.db, blog_id, blog_data)
        except Exception as e:
            logger.error(f"Repository error: {str(e)}")
            raise

    def delete_blog(self, blog_id: int):
        """
            Delete a blog
        """
        try:
            return self.blog_repository.delete_blog(self.db, blog_id)
        except Exception as e:
            logger.error(f"Repository error: {str(e)}")
            raise
            
    def patch_blog(self, blog_id: int, blog_data: BlogPatch):
        """
            Partially update a blog
        """
        try:
            return self.blog_repository.patch_blog(self.db, blog_id, blog_data)
        except Exception as e:
            logger.error(f"Repository error: {str(e)}")
            raise
