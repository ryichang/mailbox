import { FETCH_USER } from '../actions/types';

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_USER:
      console.log(action.payload)
      console.log('state', state)

      return action.payload || false;
      // return {...state, auth: action.payload || false}
    default:
      return state;
  }
}
