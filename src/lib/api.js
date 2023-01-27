import axios from 'axios';
import { AUTH } from './auth';

const ENDPOINTS = {
  allPets: `${process.env.REACT_APP_BASE_URL}/api/pets/`,

  singlePet: (id) => `${process.env.REACT_APP_BASE_URL}/api/pets/${id}/`,

  myPets: `${process.env.REACT_APP_BASE_URL}/api/my-pets/`,

  addPet: `${process.env.REACT_APP_BASE_URL}/api/my-pets/add-pet/`,

  getComments: (id) => `${process.env.REACT_APP_BASE_URL}/api/Comments/`,

  login: `${process.env.REACT_APP_BASE_URL}/api/auth/login/`,

  register: `${process.env.REACT_APP_BASE_URL}/api/auth/register/`,

  getEnvironments: (id) =>
    `${process.env.REACT_APP_BASE_URL}/api/environments/`,

  // search: (query) => `/api/brands/search?search=${query}`,

  // cloudinary: `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}/image/upload`,
};

const getHeaders = () => ({
  headers: { authorization: `Bearer ${AUTH.getToken()}` },
});

const GET = (endpoint) => axios.get(endpoint);
const POST = (endpoint, body, headers) =>
  headers ? axios.post(endpoint, body, headers) : axios.post(endpoint, body);
const PUT = (endpoint, body, headers) => axios.put(endpoint, body, headers);
const DELETE = (endpoint, headers) => axios.delete(endpoint, headers);

export const API = { GET, POST, PUT, DELETE, ENDPOINTS, getHeaders };
