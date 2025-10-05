from fastapi import APIRouter
from app.controller import blog_controller

router = APIRouter()
router.include_router(blog_controller.router)
