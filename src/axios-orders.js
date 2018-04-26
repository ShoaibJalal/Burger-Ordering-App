import axios from 'axios';

const instance = axios.create({
baseURL: 'https://burger-ordering-app-bf1bf.firebaseio.com/'
});

export default instance;