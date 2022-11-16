import React from "react";
import Container from '@mui/material/Container';
import SearchIcon from '@mui/icons-material/Search';


const AUTH_URL ="https://accounts.spotify.com/authorize?client_id=085a8ae9156c4268bf2184fe76007a12&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"


  export default function Login() {
    return (
     
          <Container maxWidth="md-justifyContent-center text-align- center "
       style={{miHeight:'100 vh',
               
               }}
       >
        
          <button style={{
            background:' #ff97d9',
            opacity:'0.6',
            borderRadius: 6,
            border: 0,
            height: '100px',
            fontSize:'30px',
            margin: '100px',
            padding: '0 200px',
            boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',

          }}>
          
            <a type href={AUTH_URL} >
              Login With Spotify
            </a>
            <SearchIcon
              style ={{color:"blue",
                        gap:'2',
                        }}
            />
          </button>
        </Container>
    )
  }


//Responsive//

const styles = (theme) => ({
  root: {
    padding: theme.spacing(1),
    [theme.breakpoints.down('md')]: {
      backgroundColor: theme.body,
    },
    [theme.breakpoints.up('md')]: {
      backgroundColor: theme.body,
    },
    [theme.breakpoints.up('lg')]: {
      backgroundColor: [500],
    },
  },
});
