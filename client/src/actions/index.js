import axios from 'axios';
import { FETCH_USER } from './types';

//redux action creator
export const fetchUser = () =>
  //using dispatch function from thunk
  dispatch => {
    axios
      .get('/api/current_user')
      .then(res => dispatch({ type: FETCH_USER, payload: res }));
  };
