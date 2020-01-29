import { combineReducers } from 'redux';

// import reducers
import auth from './auth/reducer';
import user from './user/reducer';

export default combineReducers({
  auth,
  user,
});
