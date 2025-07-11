from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS

@app.route('/')
def index():
    return jsonify({"message": "Feelify backend is running!"})

if __name__ == '__main__':
    app.run(debug=True)

import os
import requests
from flask import request

SPOTIFY_TOKEN_URL = "https://accounts.spotify.com/api/token"

@app.route('/auth/token', methods=['POST'])
def get_spotify_token():
    auth_code = request.json.get('code')

    data = {
        'grant_type': 'authorization_code',
        'code': auth_code,
        'redirect_uri': os.environ.get("https://feelify-tan.vercel.app/"),
        'client_id': os.environ.get("1f59af9e45e0404d81a89170df09f6b8"),
        'client_secret': os.environ.get("d52fd0e98aaa41f7a750928012f8d66c")
    }

    response = requests.post(SPOTIFY_TOKEN_URL, data=data)
    return response.json()

