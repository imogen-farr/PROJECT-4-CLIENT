import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AUTH } from '../../lib/auth';
import { API } from '../../lib/api';

import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const initialFormData = {
  email: '',
  password: '',
};

const Login = () => {
  const image = require('../../assets/main-background.png');
  const navigate = useNavigate();
  const [formFields, setFormFields] = useState(initialFormData);
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    API.POST(API.ENDPOINTS.login, formFields)
      .then(({ data: { token } }) => {
        AUTH.setToken(token);
        navigate('/pets');
      })
      .catch(({ response }) => {
        console.error(response);
        setError(true);
      });
  };

  const handleChange = ({ target: { name, value } }) => {
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <Container
      className='loginPage'
      maxWidth='2000px'
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 900,
        width: 1300,
        backgroundImage: `radial-gradient(circle, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2) ), url(${image})`,
        backgroundSize: 'cover',
        mb: 0,
      }}
    >
      <Box className='loginForm' component='form' onSubmit={handleSubmit}>
        <Box className='innerLogin'>
          <TextField
            className='textField'
            size='small'
            required={true}
            value={formFields.email}
            error={error}
            onChange={handleChange}
            type='email'
            label='Email'
            id='email'
            name='email'
            placeholder='Email'
            sx={{
              mb: 2,
              fontFamily: 'Optima',
            }}
          />
        </Box>
        <Box>
          <TextField
            className='textField'
            size='small'
            label='Password'
            type='password'
            required={true}
            value={formFields.password}
            error={error}
            onChange={handleChange}
            id='password'
            name='password'
            placeholder='Password'
          />
        </Box>
        <Button
          type='submit'
          sx={{
            fontFamily: 'Optima',
            color: 'rgb(240, 173, 4)',
            marginLeft: '90px',
            fontSize: '20px',
            fontWeight: 'bold',
          }}
        >
          Login
        </Button>
      </Box>
    </Container>
  );
};

export default Login;
