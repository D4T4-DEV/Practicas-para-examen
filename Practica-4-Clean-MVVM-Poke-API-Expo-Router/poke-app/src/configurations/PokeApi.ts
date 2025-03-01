import axios from "axios";


const Poke_API = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/',
    timeout: 5000,
    responseType: 'json',
    headers: {
        'Content-Type': 'application/json',
    }
});

export default Poke_API;