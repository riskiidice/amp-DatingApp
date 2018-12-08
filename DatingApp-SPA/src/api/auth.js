import axios from 'axios';

const ROOT_URL = "http://localhost:5000/api/auth/";

export default {
  login(userForm){
    return axios.post(`${ROOT_URL}login`, {username: userForm.username, password: userForm.password});
  },
  register(userForm){
    return axios.post(`${ROOT_URL}register`, {username: userForm.username, password: userForm.password});
  }
}
