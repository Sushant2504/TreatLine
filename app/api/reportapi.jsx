


const reportapi = axios.create({
      baseUrl: 'https://treatline.onrender.com/api/report',
        headers: {
            'Content-Type': 'application/json',
        },
});


export default reportapi;

