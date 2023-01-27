import { useNavigate } from 'react-router-dom';
import { Button, Box } from '@mui/material';
import { Container } from '@mui/system';
import '../styles/App.css';

export default function Welcome() {
  const navigate = useNavigate();
  const image = require('../assets/welcome-background-2.png');

  return (
    <Container
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage: `radial-gradient(circle, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2) ), url(${image})`,
        backgroundSize: 'cover',
        minWidth: '100vw',
        minHeight: '100vh',
        textAlign: 'center',
        mt: -5,
        mb: 0,
        height: '900px',
      }}
    >
      <Box maxWidth='3000px' className='welcome-box' sx={{ mb: 0 }}>
        <h1 style={{ color: 'rgb(240, 173, 4)', fontFamily: 'Optima' }}>
          GOBOLINO
        </h1>
        <p style={{ color: 'rgb(240, 173, 4)', fontFamily: 'Optima' }}>
          A guide for all pet lovers past, present & future
        </p>
        <Button
          variant='contained'
          color='primary'
          onClick={() => navigate('/register')}
          sx={{
            mt: 2,
            fontFamily: 'Optima',
            backgroundColor: '#643909',
            mb: 2,
            marginRight: '10px',
          }}
        >
          Register
        </Button>
        <Button
          variant='contained'
          color='primary'
          onClick={() => navigate('/login')}
          sx={{
            mt: 2,
            fontFamily: 'Optima',
            backgroundColor: '#643909',
            mb: 2,
            marginLeft: '10px',
          }}
        >
          Login
        </Button>
      </Box>
      {/* <h1>Welcome to your book library</h1> */}
      {/* <p>A hub to store all your favourite reads</p> */}
    </Container>
  );
}
