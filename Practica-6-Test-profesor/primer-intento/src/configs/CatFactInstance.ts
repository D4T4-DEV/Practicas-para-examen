import axios from 'axios';

const CatFactInstanceApi = axios.create({
    baseURL: 'https://catfact.ninja/',
    timeout: 5000,
    responseType: 'json'
});

export default CatFactInstanceApi;