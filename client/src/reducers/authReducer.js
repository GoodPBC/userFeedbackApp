import { FETCH_USER } from '../actions/types';

//auth reducer function
export default function(state = null, action) {
  switch (action.type) {
    case FETCH_USER:
      //action.payload = User model
      console.log(action.payload);
      return action.payload || false;
    default:
      return state;
  }
}
