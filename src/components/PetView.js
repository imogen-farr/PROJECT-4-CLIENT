import { useState, useEffect, useMemo } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { API } from '../lib/api';
import { useAuthenticated } from '../hooks/useAuthenticated';
import { AUTH } from '../lib/auth';
import Navbar from './navigation/Navbar';

import {
  Container,
  Box,
  CardActions,
  CardContent,
  Button,
  Typography,
  TextareaAutosize,
} from '@mui/material';

const PetView = () => {
  const [isLoggedIn] = useAuthenticated();
  const navigate = useNavigate();
  // const navigateToMessages = navigate('/messages');
  const { id } = useParams();
  const [singlePet, setSinglePet] = useState(null);
  const [isUpdated, setIsUpdated] = useState(false);
  const [formData, setFormData] = useState('');
  const image = require('../assets/frog.png');

  useEffect(() => {
    API.GET(API.ENDPOINTS.singlePet(id))
      .then(({ data }) => {
        setSinglePet(data);
      })
      .catch(({ message, response }) => {
        console.error(message, response);
      });
    setIsUpdated(false);
  }, [id, isUpdated]);

  const goToIndex = () => navigate('/pets');
  const goToMessages = () => navigate('/messages');

  return (
    <>
      <Navbar />
      <Container
        className='petView'
        maxWidth='1000px'
        sx={{
          display: 'flex',
          backgroundColor: 'rgb(63,110,127)',
          backgroundSize: 'cover',
          fontFamily: 'Optima',
        }}
      >
        <Box className='image'>
          <img
            style={{ width: 300, height: 421 }}
            // src={singlePet?.image}
            src={image}
            alt={singlePet?.animal}
          />
        </Box>
        <Box className='box'>
          <CardContent>
            <Typography
              variant='h5'
              component='p'
              sx={{ fontFamily: 'Optima' }}
            >
              Name: {singlePet?.name}
            </Typography>
            <Typography
              variant='h5'
              component='p'
              sx={{ fontFamily: 'Optima' }}
            >
              Animal: {singlePet?.animal}
            </Typography>
            <Typography color='text.secondary' sx={{ fontFamily: 'Optima' }}>
              {/* Environment: {singlePet?.environment} */}
              Environment: Outdoor
            </Typography>
            <Typography color='text.secondary' sx={{ fontFamily: 'Optima' }}>
              {/* Lifespan: {singlePet?.lifespan} */}
              LifeSpan: 5 Years
            </Typography>

            {/* <Typography color='text.secondary'>
              Added by {singlePet?.addedBy.username}
            </Typography> */}
          </CardContent>
          <CardActions>
            <Button
              size='small'
              onClick={goToIndex}
              sx={{ color: 'white', fontFamily: 'Optima' }}
            >
              BACK TO ALL PETS
            </Button>
            {/* <Button size='small' onClick={goToMessages} sx={{ color: 'white' }}>
              MESSAGE OWNER
            </Button> */}
          </CardActions>
        </Box>
        <Box>
          <Box>
            <div className='MessageBox'>
              <TextareaAutosize
                name='diaryEntry'
                value={formData.diaryEntry}
                // onChange={handleChange}
                placeholder='Write a message to the owner...'
                label='Message'
                minRows={10}
                style={{ width: 500 }}
              />
              <Button
                sx={{ fontFamily: 'Optima', color: 'white' }}
                onClick={goToMessages}
              >
                SEND
              </Button>
            </div>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default PetView;
