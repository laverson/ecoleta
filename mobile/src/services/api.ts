import axios from 'axios';
import { apisAreAvailable } from 'expo';

const api = axios.create({
  baseURL: 'http://192.168.0.103:3333'
});

export default api;