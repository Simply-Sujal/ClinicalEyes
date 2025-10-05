from fastapi import APIRouter
from app.controller import contactus_controller

router = APIRouter()
router.include_router(contactus_controller.router)