"""
Database setup script for NeonDB
This script creates all the necessary tables in your NeonDB instance
"""

import asyncio
import os
from dotenv import load_dotenv
from sqlalchemy import text
from app.db.db import async_engine, Base
from app.models import blog, careers, contactus, newsletter

load_dotenv()

async def create_tables():
    """Create all database tables"""
    print("🚀 Setting up database tables...")
    
    try:
        async with async_engine.begin() as conn:
            # Create all tables
            await conn.run_sync(Base.metadata.create_all)
            print("✅ All tables created successfully!")
            
            # List created tables
            result = await conn.execute(text("""
                SELECT table_name 
                FROM information_schema.tables 
                WHERE table_schema = 'public' 
                AND table_type = 'BASE TABLE'
            """))
            tables = result.fetchall()
            
            if tables:
                print("📋 Created tables:")
                for table in tables:
                    print(f"   - {table[0]}")
            else:
                print("ℹ️  No tables found (they may already exist)")
                
    except Exception as e:
        print(f"❌ Error creating tables: {str(e)}")
    finally:
        await async_engine.dispose()

if __name__ == "__main__":
    asyncio.run(create_tables())
