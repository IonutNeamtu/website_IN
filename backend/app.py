from flask import Flask, jsonify

# Create a Flask application
app = Flask(__name__)

# Allow CORS for all routes (you can customize this based on your needs)


# Define a route and associated function
@app.route('/')
def hello_world():
    response = jsonify(message="Hello from Flask!")
    response.headers.add("Access-Control-Allow-Origin", "http://localhost:4200")
    return response


if __name__ == '__main__':
    app.run()
