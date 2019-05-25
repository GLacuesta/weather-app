import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://www.metaweather.com'
});

export default instance;