import { useEffect, useState } from 'react';
import {
  TextField,
  Container,
  Box,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextareaAutosize,
} from '@mui/material';
import { API } from '../lib/api';
import { useNavigate } from 'react-router-dom';
import Navbar from './navigation/Navbar';
// import DashboardNav from './common/DashboardNav';

export default function AddPet() {
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const [availableEnvironments, setAvailableEnvironments] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    animal: '',
    environment: '',
    image: '',
    lifespan: '',
  });
  // const [rating, setRating] = useState(0);

  useEffect(() => {
    API.GET(API.ENDPOINTS.getEnvironments)
      .then(({ data }) => setAvailableEnvironments(data))
      .catch((e) => console.log(e));
  }, []);

  // const formDataWithRating = { ...formData, rating: rating };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    API.POST(API.ENDPOINTS.allPets, API.getHeaders())
      .then(() => {
        navigate('/my-pets');
      })
      .catch(({ response }) => {
        console.log(response);
      });
  };
  console.log(availableEnvironments);
  return (
    <>
      <Navbar />
      <Container
        maxWidth='1000px'
        sx={{
          display: 'flex',
          justifyContent: 'center',
          pt: 5,
          backgroundColor: 'rgb(100,124,103)',
          backgroundSize: 'cover',
          height: '900px',
          mb: 0,
          border: 'none',
          padding: 'none',
        }}
      >
        <form onSubmit={handleSubmit}>
          <Box sx={{ mb: 2 }}>
            <TextField
              required
              size='small'
              type='text'
              value={formData.name}
              onChange={handleChange}
              error={error}
              label='Name'
              name='name'
            />
          </Box>
          <Box sx={{ mb: 2 }}>
            <TextField
              required
              size='small'
              type='text'
              value={formData.animal}
              onChange={handleChange}
              error={error}
              label='Animal'
              name='animal'
            />
          </Box>
          <Box>
            <FormControl size='small' sx={{ mb: 2, width: '50%' }}>
              <InputLabel id='environment'>Environment</InputLabel>
              <Select
                required
                labelId='environment'
                value={formData.environment}
                onChange={handleChange}
                label='Environment'
                name='environement'
              >
                {availableEnvironments?.map((environment) => (
                  <MenuItem key={environment._id} value={environment.name}>
                    {environment.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
          <Box sx={{ mb: 2 }}>
            <TextField
              required
              fullWidth
              size='small'
              type='text'
              value={formData.image}
              onChange={handleChange}
              error={error}
              label='Pet Image'
              name='image'
              placeholder='Paste link here'
            />
          </Box>
          <Box sx={{ mb: 2 }}>
            <TextField
              required
              size='small'
              type='text'
              value={formData.lifespan}
              name='lifespan'
              onChange={handleChange}
              error={error}
              label='Lifespan'
              placeholder='5 years, 5 months etc...'
            />
          </Box>
          <Button variant='contained' type='submit'>
            ADD NEW PET
          </Button>
        </form>
      </Container>
    </>
  );
}
