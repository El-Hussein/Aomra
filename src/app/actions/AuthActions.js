import {
  LOGIN_ATTEMPT,
  LOGIN_SUCCESS,
  LOGIN_FAILED
} from './types';

import { AsyncStorage } from 'react-native';
import axios from 'axios';


const onLoginSuccess = (dispatch, user, token) => {

  AsyncStorage.setItem('app_token',token)
    .then(() => {
      dispatch({ type: LOGIN_SUCCESS, user })
    });
};

const onLoginFailed = (dispatch, errorMessage) => {
  dispatch({ type: LOGIN_FAILED, error: errorMessage})
};

export const loginUser = ({ username, password }) => {
    dispatch({ type: LOGIN_ATTEMPT });
    var qs = require('qs');
    alert('signing in please wait..');
    return axios.post('https://computershopegypt.com/android/account/Login', qs.stringify({ 'email':this.state.email, 'password':this.state.password,}))
    .then( (response) => {
      if(response.data.message){
        onLoginFailed(dispatch, response.data.message);
        alert("Email or password invalid!");
      }else{
        AsyncStorage.setItem('user', JSON.stringify(user)).then(
          ()=>{
            onLoginSuccess(dispatch, user, "data.token")
            this.props.navigation.navigate('UserProfile');
          }
        );
      }
    })
    .catch(function (error) {
        console.log(error);
    });

  // return (dispatch) => {
    

  //   //Call the back-end API
  //   //Please do not spam/abuse it so others can use it as well.
  //   axios.post('https://mean-app-tutorial.herokuapp.com/users/auth',
  //   { email: username, password })
  //     .then(resp => handleResponse(dispatch, resp.data))
  //     .catch(error => console.error(error));

  // };
}
