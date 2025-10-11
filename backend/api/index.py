import sys
import os

# Add parent directory to Python path so we can import app module
sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from app.main import app

# This is the entry point for Vercel serverless functions
app = app

