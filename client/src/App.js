import React from 'react';

const CLIENT_ID = "1f59af9e45e0404d81a89170df09f6b8";
const REDIRECT_URI = "https://feelify-tan.vercel.app/";
const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
const RESPONSE_TYPE = "code";
const SCOPES = "user-read-private playlist-read-private";

function App() {
  const login = () => {
    window.location.href =
      `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPES}`;
  };

  return (
    <div style={{ textAlign: "center", marginTop: "4rem" }}>
      <h1>🎧 Welcome to Feelify</h1>
      <p>Discover playlists that match your mood.</p>
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
    </div>
  );
}

export default App;
