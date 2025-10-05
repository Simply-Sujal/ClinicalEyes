# API Endpoints

## Base URL
```
http://127.0.0.1:8000
```

## Health Check
```bash
GET /
```

## Blog Endpoints

### Create Blog
```bash
POST /blogs/
Content-Type: application/json
{
  "title": "string (2-200 chars)",
  "content": "string (2-3000 chars)",
  "author": "string (2-100 chars)",
  "image_url": "string (optional)"
}
```

### Get All Blogs
```bash
GET /blogs/
```

### Get Blog by ID
```bash
GET /blogs/{blog_id}
```

### Update Blog
```bash
PUT /blogs/{blog_id}
Content-Type: application/json
{
  "title": "string (2-200 chars)",
  "content": "string (2-3000 chars)",
  "author": "string (2-100 chars)",
  "image_url": "string"
}
```

### Partial Update Blog
```bash
PATCH /blogs/{blog_id}
Content-Type: application/json
{
  "title": "string (optional)",
  "content": "string (optional)",
  "author": "string (optional)",
  "image_url": "string (optional)"
}
```

### Delete Blog
```bash
DELETE /blogs/{blog_id}
```

## Career Endpoints

### Create Career
```bash
POST /careers/
Content-Type: application/json
{
  "title": "string (2-100 chars)",
  "description": "string (2-2000 chars)",
  "location": "string (2-100 chars)",
  "experience": "string (2-100 chars)"
}
```

### Get All Careers
```bash
GET /careers/
```

### Get Career by ID
```bash
GET /careers/{career_id}
```

### Update Career
```bash
PUT /careers/{career_id}
Content-Type: application/json
{
  "title": "string (2-100 chars)",
  "description": "string (2-2000 chars)",
  "location": "string (2-100 chars)",
  "experience": "string (2-100 chars)"
}
```

### Partial Update Career
```bash
PATCH /careers/{career_id}
Content-Type: application/json
{
  "title": "string (optional)",
  "description": "string (optional)",
  "location": "string (optional)",
  "experience": "string (optional)"
}
```

### Delete Career
```bash
DELETE /careers/{career_id}
```

## Contact Us Endpoints

### Create Contact Request
```bash
POST /contactus/
Content-Type: application/json
{
  "name": "string (2-100 chars)",
  "email": "string (2-100 chars)",
  "contact_number": "string (max 13 chars)",
  "message": "string (2-2000 chars)"
}
```

### Get All Contact Requests
```bash
GET /contactus/
```

### Get Contact Request by ID
```bash
GET /contactus/{contactus_id}
```

### Delete Contact Request
```bash
DELETE /contactus/{contactus_id}
```

## Newsletter Endpoints

### Subscribe to Newsletter
```bash
POST /newsletters/
Content-Type: application/json
{
  "email": "string (valid email)"
}
```

### Get All Newsletter Subscriptions
```bash
GET /newsletters/
```
