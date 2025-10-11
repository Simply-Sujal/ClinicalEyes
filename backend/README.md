# Clinical Eyes Backend 
## Clinical Eyes is a service based startup based on UK providing services related to the field of Medical.

## Backend Features 
- **Blog**: Blogging important articles related to the field of Medical.
- **Careers**: One can apply for the careers available in the company.
- **Contact**: One can contact the company through this Form.
- **Newsletter**: One can subscribe to the newsletter to get the latest updates.

## Technologies Used
- **FastAPI**: FastAPI is a modern, fast (high-performance), web framework for building APIs with Python 3.10+ based on standard Python type hints.
- **PostgreSQL**: PostgreSQL is for storing the data.
- **uv**: uv is a package manager for Python.
- **uvicorn**: uvicorn is an ASGI server implementation for Python.
- **SQLAlchemy**: ORM for database operations.

## Local Development

### Prerequisites
- Python 3.10+
- PostgreSQL database

### Installation
```bash
# Clone the repository
git clone https://github.com/Simply-Sujal/clinicaleyes-backend.git
cd clinicaleyes-backend

# Install dependencies
pip install -r requirements.txt

# Set up environment variables
# Create a .env file with your DATABASE_URL
echo "DATABASE_URL=postgresql://username:password@localhost:5432/clinical_eyes" > .env

# Run the application
uvicorn app.main:app --reload
```

The API will be available at `http://localhost:8000`

API documentation is available at `http://localhost:8000/docs`

## Deployment

### Deploy to Vercel
This application is configured for deployment on Vercel. See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions.

Quick deploy:
1. Push your code to GitHub
2. Import project on [Vercel](https://vercel.com)
3. Add `DATABASE_URL` environment variable
4. Deploy!

## Environment Variables
- `DATABASE_URL`: PostgreSQL connection string (required)

## API Endpoints
See [API_ENDPOINTS.md](./API_ENDPOINTS.md) for detailed API documentation.

## Project Structure
```
backend/
├── app/
│   ├── config/          # Configuration files
│   ├── controller/      # Request handlers
│   ├── db/              # Database connection
│   ├── models/          # SQLAlchemy models
│   ├── repository/      # Database operations
│   ├── router/          # API routes
│   ├── schemas/         # Pydantic schemas
│   ├── service/         # Business logic
│   └── main.py          # Application entry point
├── api/
│   └── index.py         # Vercel entry point
├── vercel.json          # Vercel configuration
└── requirements.txt     # Python dependencies
```