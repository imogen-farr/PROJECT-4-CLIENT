import { useEffect, useState } from 'react';
import { API } from '../lib/api';
import { Container, Grid, Typography, Box, Button } from '@mui/material';
import { AUTH } from '../lib/auth';

import PetCard from './common/PetCard';
import Navbar from './navigation/Navbar';

const MyPets = () => {
  const [pets, setPets] = useState(null);

  useEffect(() => {
    API.GET(API.ENDPOINTS.userPets(AUTH.getPayload().userId))
      .then(({ data }) => {
        setPets(data.myPets);
        console.log(data.myPets);
      })
      .catch(({ message, response }) => {
        console.error(message, response);
      });
  }, []);

  return (
    <>
      <Navbar />
      <Container
        maxWidth='lg'
        sx={{
          display: 'flex',
          justifyContents: 'center',
          alignItems: 'center',
          flexDirection: 'column',
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
        ></Box>
        <Grid
          sx={{
            flexDirection: 'column',
            justifyContents: 'center',
            alignItems: 'center',
          }}
        >
          {pets?.map((pet) => (
            <Grid sx={{ mb: 2 }} item xs={4} key={pet._id}>
              <PetCard
                title={pet.name}
                animal={pet.animal}
                environment={pet.environment}
                lifespan={pet.lifespan}
                image={pet.cover_image}
                id={pet.id}
                alt={pet.name}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default MyPets;
