from fastapi import APIRouter, Depends, HTTPException
from typing import List
from starlette.status import HTTP_201_CREATED, HTTP_200_OK, HTTP_500_INTERNAL_SERVER_ERROR
import logging

from app.service.blogservice import BlogService
from app.schemas.blog import BlogCreate, BlogUpdate, BlogResponse, BlogPatch
from app.utils.get_service_obj import get_service_obj

logger = logging.getLogger(__name__)

router = APIRouter()

@router.post("/", response_model=BlogResponse, status_code=HTTP_201_CREATED)
def create_blog(blog: BlogCreate, blog_service: BlogService = Depends(get_service_obj)):
    """
        Create a new blog
    """
    try:
        blog = blog_service.create_blog(blog)
        return blog
    except HTTPException as e:
        raise e
    except Exception as e:
        raise HTTPException(status_code=HTTP_500_INTERNAL_SERVER_ERROR, detail=str(e))


@router.get("/", response_model=List[BlogResponse], status_code=HTTP_200_OK)
def get_blogs(blog_service: BlogService = Depends(get_service_obj)):
    """
        Get all blogs
    """
    try:
        blogs = blog_service.get_blogs()
        return blogs
    except HTTPException as e:
        raise e
    except Exception as e:
        logger.error(f"Error in get_blogs: {str(e)}", exc_info=True)
        raise HTTPException(status_code=HTTP_500_INTERNAL_SERVER_ERROR, detail=f"Failed to retrieve blogs: {str(e)}")


@router.get("/{blog_id}", response_model=BlogResponse, status_code=HTTP_200_OK)
def get_blog(blog_id: int, blog_service: BlogService = Depends(get_service_obj)):
    """
        Get a single blog by id
    """
    try:
        blog = blog_service.get_blog(blog_id)
        return blog
    except HTTPException as e:
        raise e
    except Exception as e:
        raise HTTPException(status_code=HTTP_500_INTERNAL_SERVER_ERROR, detail=str(e))


@router.put("/{blog_id}", response_model=BlogResponse, status_code=HTTP_200_OK)
def update_blog(blog_id: int, blog_data: BlogUpdate, blog_service: BlogService = Depends(get_service_obj)):
    """
        Update a blog
    """
    try:
        blog = blog_service.update_blog(blog_id, blog_data)
        return blog
    except HTTPException as e:
        raise e
    except Exception as e:
        raise HTTPException(status_code=HTTP_500_INTERNAL_SERVER_ERROR, detail=str(e))


@router.delete("/{blog_id}", status_code=HTTP_200_OK)
def delete_blog(blog_id: int, blog_service: BlogService = Depends(get_service_obj)):
    """
        Delete a blog
    """
    try:
        blog = blog_service.delete_blog(blog_id)
        return blog
    except HTTPException as e:
        raise e
    except Exception as e:
        raise HTTPException(status_code=HTTP_500_INTERNAL_SERVER_ERROR, detail=str(e))


@router.patch("/{blog_id}", response_model=BlogResponse, status_code=HTTP_200_OK)
def patch_blog(blog_id: int, blog_data: BlogPatch, blog_service: BlogService = Depends(get_service_obj)):
    """
        Partially update a blog
    """
    try:
        blog = blog_service.patch_blog(blog_id, blog_data)
        return blog
    except HTTPException as e:
        raise e
    except Exception as e:
        raise HTTPException(status_code=HTTP_500_INTERNAL_SERVER_ERROR, detail=str(e))