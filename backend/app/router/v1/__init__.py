from fastapi import APIRouter

from . import career_router
from . import blog_router
from . import newsletter_router
from . import contactus_router

router = APIRouter()
router.include_router(blog_router.router, prefix="/blogs", tags=["Blogs"])
router.include_router(newsletter_router.router, prefix="/newsletters", tags=["Newsletters"])
router.include_router(career_router.router, prefix="/careers", tags=["Careers"])
router.include_router(contactus_router.router, prefix="/contactus", tags=["Contactus"])


__all__ = ['router']
