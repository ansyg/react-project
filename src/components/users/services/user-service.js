import axios from 'axios';

// const ENDPOINT = "/api/v1/users";
const ENDPOINT = "/data";

export const user = {


  async get(payload) {

    return axios.get(ENDPOINT, { params: payload });
  },

}
