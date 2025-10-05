# Clinical Eyes

A comprehensive clinical research platform with a modern React frontend and FastAPI backend, deployed with NeonDB.

## 🏗️ Project Structure

```
clinical-eyes/
├── frontend/          # React.js frontend application
│   ├── src/
│   │   ├── components/    # Reusable React components
│   │   ├── pages/         # Page components
│   │   ├── assets/        # Static assets
│   │   └── ...
│   ├── package.json
│   └── ...
├── backend/           # FastAPI backend application
│   ├── app/
│   │   ├── api/          # API routes
│   │   ├── models/       # Database models
│   │   ├── schemas/      # Pydantic schemas
│   │   ├── services/     # Business logic
│   │   ├── controllers/  # API controllers
│   │   └── ...
│   ├── requirements.txt
│   └── ...
└── README.md
```

## 🚀 Features

### Frontend (React.js)
- Modern, responsive UI with Tailwind CSS
- Component-based architecture
- Pages for:
  - Home/Landing page
  - About Us
  - Services
  - Blog
  - Careers
  - Contact Us
  - Privacy Policy & Terms

### Backend (FastAPI)
- RESTful API with automatic documentation
- Database integration with NeonDB (PostgreSQL)
- CRUD operations for:
  - **Blogs**: Clinical research articles and insights
  - **Careers**: Job postings and opportunities
  - **Contact Us**: Customer inquiries and support
  - **Newsletter**: Email subscription management

## 🛠️ Technology Stack

### Frontend
- **React.js** - UI framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling framework
- **React Router** - Client-side routing

### Backend
- **FastAPI** - Modern Python web framework
- **SQLAlchemy** - ORM for database operations
- **Pydantic** - Data validation and serialization
- **NeonDB** - Serverless PostgreSQL database
- **Uvicorn** - ASGI server

## 📋 Prerequisites

- Node.js (v16 or higher)
- Python (v3.10 or higher)
- Git

## 🚀 Getting Started

### Backend Setup

1. **Navigate to backend directory:**
   ```bash
   cd backend
   ```

2. **Create virtual environment:**
   ```bash
   python -m venv .venv
   source .venv/bin/activate  # On Windows: .venv\Scripts\activate
   ```

3. **Install dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

4. **Set up environment variables:**
   ```bash
   export DATABASE_URL='your_neondb_connection_string'
   ```

5. **Run the server:**
   ```bash
   uvicorn app.main:app --host 127.0.0.1 --port 8000 --reload
   ```

### Frontend Setup

1. **Navigate to frontend directory:**
   ```bash
   cd frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```

## 📚 API Documentation

Once the backend is running, you can access:
- **Interactive API docs**: http://127.0.0.1:8000/docs
- **ReDoc documentation**: http://127.0.0.1:8000/redoc

### API Endpoints

#### Blogs
- `GET /blogs/` - Get all blog posts
- `POST /blogs/` - Create new blog post
- `GET /blogs/{id}` - Get specific blog post
- `PUT /blogs/{id}` - Update blog post
- `PATCH /blogs/{id}` - Partial update
- `DELETE /blogs/{id}` - Delete blog post

#### Careers
- `GET /careers/` - Get all job postings
- `POST /careers/` - Create new job posting
- `GET /careers/{id}` - Get specific job posting
- `PUT /careers/{id}` - Update job posting
- `PATCH /careers/{id}` - Partial update
- `DELETE /careers/{id}` - Delete job posting

#### Contact Us
- `GET /contactus/` - Get all contact requests
- `POST /contactus/` - Submit contact request
- `GET /contactus/{id}` - Get specific contact request
- `DELETE /contactus/{id}` - Delete contact request

#### Newsletter
- `GET /newsletters/` - Get all newsletter subscriptions
- `POST /newsletters/` - Subscribe to newsletter

## 🗄️ Database

The application uses **NeonDB** (serverless PostgreSQL) for data persistence. The database includes tables for:

- **blogs** - Blog posts and articles
- **careers** - Job postings and opportunities
- **contact_us** - Customer contact requests
- **newsletters** - Email subscriptions

## 🔧 Development

### Backend Development
- The backend follows a clean architecture pattern with separate layers for:
  - **Models**: Database table definitions
  - **Schemas**: Data validation and serialization
  - **Services**: Business logic
  - **Controllers**: API endpoint handlers
  - **Repositories**: Data access layer

### Frontend Development
- Component-based architecture with reusable UI components
- Responsive design using Tailwind CSS
- Modern React patterns with hooks and functional components

## 📝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- **Sujal** - *Initial work* - [Simply-Sujal](https://github.com/Simply-Sujal)

## 🙏 Acknowledgments

- Clinical research community for inspiration
- FastAPI and React communities for excellent documentation
- NeonDB for providing a great serverless database solution
