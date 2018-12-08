import axios from 'axios';

const ROOT_URL = "http://localhost:5000/api/values/";

export default {
  
  getAllValues(){
    return axios.get(`${ROOT_URL}`).then(res => res.data);
  },

}
