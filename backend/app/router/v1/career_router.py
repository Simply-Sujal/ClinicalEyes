from fastapi import APIRouter
from app.controller import career_controller

router = APIRouter()
router.include_router(career_controller.router)
