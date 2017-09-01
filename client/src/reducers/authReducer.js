import { FETCH_USER } from '../actions/types';

//auth reducer function
export default function(state = null, action) {
  switch (action.type) {
    case FETCH_USER:
      //action.payload = User model
      return action.payload || false;
    default:
      return state;
  }
}
