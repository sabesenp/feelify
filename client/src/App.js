import React, { useEffect, useState } from 'react';

const CLIENT_ID = "1f59af9e45e0404d81a89170df09f6b8";
const REDIRECT_URI = "https://feelify-tan.vercel.app/";
const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
const RESPONSE_TYPE = "code";
const SCOPES = "user-read-private playlist-read-private";

function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const code = new URLSearchParams(window.location.search).get("code");

    if (code) {
      fetch("http://localhost:5000/auth/token", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ code })
      })
        .then((res) => res.json())
        .then((data) => {
          setToken(data.access_token);
          console.log("Access token:", data.access_token);
          // Clean up URL
          window.history.pushState({}, null, "/");
        })
        .catch((err) => console.error("Token exchange error:", err));
    }
  }, []);

  const login = () => {
    window.location.href =
      `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPES}`;
  };

  return (
    <div style={{ textAlign: "center", marginTop: "4rem" }}>
      <h1>🎧 Welcome to Feelify</h1>
      <p>Discover playlists that match your mood.</p>

      {!token ? (
        <button
          onClick={login}
          style={{
            backgroundColor: "#1DB954",
            color: "white",
            padding: "12px 24px",
            border: "none",
            borderRadius: "24px",
            fontSize: "16px",
            cursor: "pointer",
            fontWeight: "bold",
            marginTop: "20px",
            transition: "background-color 0.3s"
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#1ed760")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#1DB954")}
        >
          Login with Spotify
        </button>
      ) : (
        <p>✅ Logged in! You can now access Spotify features.</p>
      )}
    </div>
  );
}

export default App;
