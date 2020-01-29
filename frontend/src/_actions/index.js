import axios from 'axios';
/***
 * ActionCreators -> create/return Actions ({ }) -> dispatched -> middlewares -> reducers
 *
 */

 // ActionCreator
 export const signUp = (data) => {
  /*
  Step 1) Use the data and to make HTTP request to our Backend and send it along
  Step 2) Take the Backend response (jwtToken is here now!)
  Step 3) Dipatch user just sigend up (with jwtToken)
  Step 4) Save the jwtToken into our localStorage
  */
  return async dispatch => {
    try {
      const response = await axios.post('http://localhost:3333/users/signup', data);
      console.log(response);
    } catch (err) {
      console.error('err', err)
    }



  }
 }
