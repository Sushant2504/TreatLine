

const hospitalsapi = axios.create({
    
    baseURL: 'https://telemedicine-backend-346a.onrender.com/api/hospitals',
    headers: {
        'Content-Type': 'application/json',
    },
});



export default hospitalsapi;

