import axios from 'axios';
import { FETCH_USER } from './types';

//redux action creator using dispatch function from thunk
//return a function that makes a request. When req completed, dispatch action
export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');

  dispatch({ type: FETCH_USER, payload: res.data });
};
//call sendStripeTokenToServer with token from stripe & call async function w/ dispatch method
export const sendStripeTokenToServer = token => async dispatch => {
  //make post request to backend server to send token
  const res = await axios.post('/api/stripe', token);

  //dispatch FETCH_USER action with response data as payload
  dispatch({ type: FETCH_USER, payload: res.data });
};
