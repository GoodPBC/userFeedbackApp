import axios from 'axios';
import { FETCH_USER } from './types';

//redux action creator using dispatch function from thunk
//return a function that makes a request. When req completed, dispatch action
export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');

  dispatch({ type: FETCH_USER, payload: res.data });
};
//call sendStripeTokenToServer with token from  stripe and call async function with dispatch method
export const sendStripeTokenToServer = token => async dispatch => {
  //make post request to backend server to send token
  const res = await axios.post('/api/payment_token', token);
};
