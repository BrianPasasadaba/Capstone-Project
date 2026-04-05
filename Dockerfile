# Dockerfile for Django project using Pipenv
FROM python:3.12-slim

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

# Set work directory
WORKDIR /app

# Install system dependencies
RUN apt-get update && \
    apt-get install -y --no-install-recommends build-essential libpq-dev && \
    rm -rf /var/lib/apt/lists/*

# Install pipenv
RUN pip install --upgrade pip && pip install pipenv

# Copy Pipfile and Pipfile.lock
COPY Pipfile Pipfile.lock ./

# Install dependencies
RUN pipenv install --deploy --ignore-pipfile

# Copy project files
COPY . .

# Collect static files (optional, uncomment if needed)
# RUN pipenv run python manage.py collectstatic --noinput

# Expose port (default Django port)
EXPOSE 8000

# Run the application using ASGI
CMD ["pipenv", "run", "uvicorn", "CapstoneProject.asgi:application", "--host", "0.0.0.0", "--port", "8000"]