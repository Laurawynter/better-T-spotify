import React from "react";
import Container from '@mui/material/Container';

const AUTH_URL = "https://accounts.spotify.com/authorize?client_id=fc64ddc1f9324f2da48683f19d84bf9c&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"

  export default function Login() {
    return (
      <Container
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "100vh" }}
      >
        <button style={{backgroundcolor:"green"}}>
        <a type  href={AUTH_URL}>
          Login With Spotify
        </a>
        </button>
      </Container>
    )
  }