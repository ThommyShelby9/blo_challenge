import axios from 'axios';

const clientHttp = axios.create({
    baseURL: "http://localhost:8080/",
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
});

clientHttp.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default clientHttp;



