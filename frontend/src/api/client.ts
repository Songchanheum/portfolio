import axios from 'axios';

const client = axios.create({
  baseURL: '/waste/',
});

export default client;
