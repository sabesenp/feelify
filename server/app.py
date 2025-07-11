from flask import Flask, request, jsonify
from flask_cors import CORS
import os
import requests
from dotenv import load_dotenv

# Load environment variables from .env
load_dotenv()

app = Flask(__name__)
CORS(app)

@app.route('/')
def index():
    return jsonify({"message": "Feelify backend is running!"})

SPOTIFY_TOKEN_URL = "https://accounts.spotify.com/api/token"

@app.route('/auth/token', methods=['POST'])
def get_spotify_token():
    auth_code = request.json.get('code')

    data = {
        'grant_type': 'authorization_code',
        'code': auth_code,
        'redirect_uri': os.environ.get("REDIRECT_URI"),
        'client_id': os.environ.get("SPOTIFY_CLIENT_ID"),
        'client_secret': os.environ.get("SPOTIFY_CLIENT_SECRET")
    }

    headers = {
        'Content-Type': 'application/x-www-form-urlencoded'
    }

    response = requests.post(SPOTIFY_TOKEN_URL, data=data, headers=headers)
    return response.json()

if __name__ == '__main__':
    app.run(debug=True)


