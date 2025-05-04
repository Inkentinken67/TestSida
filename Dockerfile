# Use official Python base image
FROM python:3.10-slim

# Set working directory
WORKDIR /app

# Copy requirements and install dependencies
COPY requirements.txt requirements.txt
RUN pip install -r requirements.txt

# Copy the app code
COPY . .

# Expose the port (Render sets PORT env var)
EXPOSE 5000

# Start the Flask app
CMD ["python", "app.py"]
