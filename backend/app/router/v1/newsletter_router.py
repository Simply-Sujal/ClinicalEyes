from fastapi import APIRouter
from app.controller import newsletter_controller

router = APIRouter()
router.include_router(newsletter_controller.router)
