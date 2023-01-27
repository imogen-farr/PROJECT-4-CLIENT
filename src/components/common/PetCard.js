import { useNavigate } from 'react-router-dom';

import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Button,
} from '@mui/material';

// import FavoriteButton from './FavoriteButton';

export default function PetCard({
  name,
  animal,
  environment,
  lifespan,
  cover_image,
  id,
}) {
  const navigate = useNavigate();
  const navigateToPet = () => navigate(`/pets/${id}`);

  return (
    <Card
      sx={{
        maxWidth: 800,
        height: 250,
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: 'rgb(100,124,103)',
      }}
    >
      <CardContent
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          width: 1,
        }}
      >
        <Box
          className='PetCard'
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flexstart',
            alignItems: 'center',
          }}
        >
          {/* <FavoriteButton id={id} /> */}
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
          }}
        >
          <Box>
            <Typography
              sx={{
                mb: 1,
                fontWeight: 'fontWeightMedium',
                // display: 'flex',
                marginRight: '200px',
                fontFamily: 'Optima',
              }}
              color='text.primary'
            >
              Name: {name}
            </Typography>
            <Typography
              sx={{ mb: 1, marginRight: '200px', fontFamily: 'Optima' }}
              color='text.secondary'
            >
              Animal: {animal}
            </Typography>
            <Typography
              color='text.secondary'
              sx={{ fontWeight: 'fontWeightLight', fontFamily: 'Optima' }}
            >
              Living Environment: {environment}
            </Typography>
            <Typography
              color='text.secondary'
              sx={{ fontWeight: 'fontWeightLight', fontFamily: 'Optima' }}
            >
              Lifespan: {lifespan}
            </Typography>
          </Box>
          <Button
            size='small'
            onClick={navigateToPet}
            sx={{
              ml: -0.6,
              textAlign: 'left',
              borderRadius: '4px',
              fontFamily: 'Optima',
              color: 'rgb(240, 173, 4)',
            }}
          >
            LEARN MORE
          </Button>
        </Box>
        <Box sx={{ height: 1, fontFamily: 'Optima' }}>
          <CardMedia
            component='img'
            image={cover_image}
            alt={animal}
            sx={{ minHeight: 180, maxWidth: 130 }}
          />
        </Box>
      </CardContent>
    </Card>
  );
}
