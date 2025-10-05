from sqlalchemy.orm import Session
from starlette.status import HTTP_404_NOT_FOUND, HTTP_500_INTERNAL_SERVER_ERROR
from ..models.blog import Blog
from ..schemas.blog import BlogCreate, BlogUpdate, BlogPatch
from fastapi import HTTPException
import logging

logger = logging.getLogger(__name__)

class BlogRepository:
    """
        Blog repository class for CRUD.
    """
    
    def create_blog(self, db: Session, blog: BlogCreate):
        """
            Create a new blog
        """
        try: 
            new_blog = Blog(
                title = blog.title,
                content = blog.content,
                author = blog.author,
                image_url = blog.image_url
            )

            db.add(new_blog)
            db.commit()
            db.refresh(new_blog)
            return new_blog
        except Exception as e:
            db.rollback()
            logger.error(f"Failed to create blog: {str(e)}", exc_info=True)
            raise HTTPException(status_code=HTTP_500_INTERNAL_SERVER_ERROR, detail="Database error occurred while creating blog")

    def get_blogs(self, db: Session):
        """
            Get the list of blogs
        """
        try:
            return db.query(Blog).all()
        except Exception as e:
            logger.error(f"Failed to get blogs: {str(e)}", exc_info=True)
            raise HTTPException(status_code=HTTP_500_INTERNAL_SERVER_ERROR, detail="Database error occurred while retrieving blogs")

    def get_blog(self, db: Session, blog_id: int):
        """
            Get a single blog by id
        """
        try:
            blog = db.query(Blog).filter(Blog.id == blog_id).first()
            if not blog:
                raise HTTPException(status_code=HTTP_404_NOT_FOUND, detail=f"Blog not found for {blog_id}")
            return blog
        except HTTPException:
            raise
        except Exception as e:
            logger.error(f"Failed to get blog: {str(e)}", exc_info=True)
            raise HTTPException(status_code=HTTP_500_INTERNAL_SERVER_ERROR, detail="Database error occurred while retrieving blog")

    def update_blog(self, db: Session, blog_id: int, blog_data: BlogUpdate):
        """
            Update blog
        """
        try:
            existing_blog = db.query(Blog).filter(Blog.id == blog_id).first()
            if not existing_blog:
                raise HTTPException(status_code=HTTP_404_NOT_FOUND, detail=f"Blog not found for {blog_id}")

            existing_blog.title = blog_data.title
            existing_blog.content = blog_data.content
            existing_blog.author = blog_data.author
            existing_blog.image_url = blog_data.image_url

            db.commit()
            db.refresh(existing_blog)
            return existing_blog
        except HTTPException:
            raise
        except Exception as e:
            db.rollback()
            logger.error(f"Failed to update blog: {str(e)}", exc_info=True)
            raise HTTPException(status_code=HTTP_500_INTERNAL_SERVER_ERROR, detail="Database error occurred while updating blog")

    def delete_blog(self, db: Session , blog_id: int):
        """
            Delete single blog by id
        """
        try:
            blog = db.query(Blog).filter(Blog.id == blog_id).first()
            if not blog: 
                raise HTTPException(status_code=HTTP_404_NOT_FOUND, detail=f"Blog not found for {blog_id}")
            db.delete(blog) 
            db.commit()
            return blog
        except HTTPException:
            raise
        except Exception as e:  
            db.rollback()
            logger.error(f"Failed to delete blog: {str(e)}", exc_info=True)
            raise HTTPException(status_code=HTTP_500_INTERNAL_SERVER_ERROR, detail="Database error occurred while deleting blog")
            
    def patch_blog(self, db: Session, blog_id: int, blog_data: BlogPatch):
        """
            Partially update blog
        """
        try:
            existing_blog = db.query(Blog).filter(Blog.id == blog_id).first()
            if not existing_blog:
                raise HTTPException(status_code=HTTP_404_NOT_FOUND, detail=f"Blog not found for {blog_id}")

            # Update only the fields that are provided
            if blog_data.title is not None:
                existing_blog.title = blog_data.title
            if blog_data.content is not None:
                existing_blog.content = blog_data.content
            if blog_data.author is not None:
                existing_blog.author = blog_data.author
            if blog_data.image_url is not None:
                existing_blog.image_url = blog_data.image_url

            db.commit()
            db.refresh(existing_blog)
            return existing_blog
        except HTTPException:
            raise
        except Exception as e:
            db.rollback()
            logger.error(f"Failed to patch blog: {str(e)}", exc_info=True)
            raise HTTPException(status_code=HTTP_500_INTERNAL_SERVER_ERROR, detail="Database error occurred while patching blog")
