



const mlmodelapi = axios.create({

    baseURL: 'https://treatline.onrender.com/api/mlmodel',
    headers: {
        'Content-Type': 'application/json',
    },

});



export default mlmodelapi;