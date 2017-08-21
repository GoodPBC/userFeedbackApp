import Axios from 'axios';
import { FETCH_USER } from './types';

//redux action creator
const fetchUser = () => {
  //using dispatch function from thunk
  return function(dispatch) {
    axios
      .get('/api/current_user')
      .then(res => dispatch({ type: FETCH_USER, payload: res }));
  };
};
