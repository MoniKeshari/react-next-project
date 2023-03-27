import axios, { AxiosInstance } from 'axios';

// const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api';
const API_URL= 'https://jsonplaceholder.typicode.com'
const client: AxiosInstance = axios.create({
  baseURL: API_URL,
});

export default client;