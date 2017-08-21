import axios from 'axios';
import { FETCH_USER } from './types';

//redux action creator using dispatch function from thunk
export const fetchUser = () => dispatch => {
  axios
    .get('/api/current_user')
    .then(res => dispatch({ type: FETCH_USER, payload: res }));
};
