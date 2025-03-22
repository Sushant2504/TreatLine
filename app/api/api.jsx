
import axios from 'axios';


const userapi = axios.create({

    baseURL: 'https://treatline.onrender.com/api/auth',
    headers: {
        'Content-Type': 'application/json',
    },

});

userapi.interceptors.response.use(
    (response) => {
        // Handle successful responses
        console.log('Response Interceptor:', response);
        return response;
    },
    (error) => {
        // Handle response errors
        console.error('Response Error:', error);
        return Promise.reject(error);
    }
);



/// ml model part for the sending of the query to the ml model input.....




const hospitalsapi = axios.create({
    
    baseURL: 'https://telemedicine-backend-346a.onrender.com/api/hospitals',
    headers: {
        'Content-Type': 'application/json',
    },
});





export default userapi;






