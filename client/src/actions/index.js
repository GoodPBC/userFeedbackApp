import Axios from 'axios';
import { FETCH_USER } from './types';

const fetchUser = () => {
  axios.get('/api/current_user');
};
