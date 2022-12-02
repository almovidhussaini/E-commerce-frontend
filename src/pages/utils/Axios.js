import axios from 'axios';
const customFetch = axios.create({

  baseURL: 'https://awful-baseball-cap-deer.cyclic.app/',
  
});

export default customFetch;