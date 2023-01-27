import { useEffect, useState } from 'react';
import { API } from '../lib/api';
import Navbar from './navigation/Navbar';
// import { redirectToLogin } from '../lib/helpers';

import { Container, Grid, Typography, Box, rgbToHex } from '@mui/material';

import PetCard from './common/PetCard';

const image = require('../assets/main-background.png');

const PetIndex = () => {
  const [pets, setPets] = useState([]);

  // redirectToLogin();

  useEffect(() => {
    API.GET(API.ENDPOINTS.allPets)
      .then(({ data }) => {
        setPets(data);
      })
      .catch(({ message, response }) => {
        console.error(message, response);
      });
  }, []);

  console.log(pets);
  return (
    <>
      <Navbar />
      <Container
        className='index-page'
        maxWidth='1000px'
        sx={{
          display: 'flex',
          justifyContents: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          backgroundImage: `radial-gradient(circle, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2) ), url(${image})`,
          paddingTop: '30px',
        }}
      >
        <Box
          sx={{
            mb: 2,
            display: 'flex',
            justifyContents: 'center',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          <Typography
            sx={{
              mb: 2,
              fontFamily: 'Optima',
              color: 'rgb(240, 173, 4)',
              fontSize: '50px',
              fontWeight: 'bolder',
            }}
            variant='h5'
          >
            All Pets
          </Typography>
        </Box>
        <Grid
          maxWidth='1000px'
          container
          spacing={2}
          columns={{ xs: 4, md: 8 }}
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContents: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
          }}
        >
          {pets?.map((pet) => (
            <Grid item xs={4} key={pet.id}>
              <PetCard
                className='petCard'
                name={pet.name}
                animal={pet.animal}
                environment={pet.environment}
                lifespan={pet.lifespan}
                image={pet.cover_image}
                id={pet.id}
                alt={pet.animal}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default PetIndex;
