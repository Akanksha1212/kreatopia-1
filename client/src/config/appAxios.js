import axios from 'axios';

// Change axios target request by simply modifying this file

// Request to local server //
const instance = axios.create({
  baseURL: 'http://localhost:3000',
});

// Request to deployed server //
// const instance = axios.create({
//   baseURL: '',
// });

export default instance;