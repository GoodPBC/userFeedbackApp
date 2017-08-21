import { FETCH_USER } from '../actions/types';

//auth reducer function
export default function(state = {}, action) {
  console.log(action);
  switch (action.type) {
    case FETCH_USER:

    default:
      return state;
  }
}
