from flask import Flask, request, jsonify
import mysql.connector
from mysql.connector import pooling
import os

app = Flask(__name__)

# Read DB config from environment variables
db_config = {
    'host': os.environ.get('DB_HOST', 'db'),
    'user': os.environ.get('DB_USER', 'root'),
    'password': os.environ.get('DB_PASSWORD', 'rootpassword'),
    'database': os.environ.get('DB_NAME', 'mydatabase')
}

# Global variable for connection pool
connection_pool = None

def get_db_connection():
    """Get a MySQL database connection from the connection pool."""
    global connection_pool
    if connection_pool is None:
        # Lazy initialize the connection pool
        connection_pool = pooling.MySQLConnectionPool(
            pool_name="mypool",
            pool_size=5,
            **db_config
        )
    return connection_pool.get_connection()

@app.route('/')
def index():
    return "Flask + MySQL API is running 🎉"

@app.route('/users', methods=['GET'])
def get_users():
    """Fetch users from the database and return as JSON."""
    try:
        conn = get_db_connection()
        cursor = conn.cursor(dictionary=True)  # For results as dictionary
        cursor.execute("SELECT * FROM users")  # Adjust table name as needed
        users = cursor.fetchall()
        cursor.close()
        conn.close()
        return jsonify(users)
    except mysql.connector.Error as err:
        return jsonify({"error": f"Database error: {err}"}), 500

@app.route('/users', methods=['POST'])
def create_user():
    """Create a new user in the database."""
    data = request.json
    name = data.get('name')

    try:
        conn = get_db_connection()
        cursor = conn.cursor()
        cursor.execute("INSERT INTO users (name) VALUES (%s)", (name,))
        conn.commit()
        cursor.close()
        conn.close()
        return jsonify({"message": "User created", "name": name}), 201
    except mysql.connector.Error as err:
        return jsonify({"error": f"Database error: {err}"}), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8000)
