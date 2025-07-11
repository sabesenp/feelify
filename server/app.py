from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS

@app.route('/')
def index():
    return jsonify({"message": "Feelify backend is running!"})

if __name__ == '__main__':
    app.run(debug=True)
