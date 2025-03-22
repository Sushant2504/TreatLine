import userapi from '../api/user_api.jsx';
import UserModel from '../models/user_model';




export const checkUserExists = async (email) => {
    try {
        const response = await api.post('/signin', { email });
        if (response.data.exists) {
            return new User(response.data.user); // Transform data into a User instance
        }
        return null; // User does not exist
    } catch (error) {
        console.error('Error checking user:', error);
        throw error;
    }
};



// export const getUsers = async () => {
//     try {
//         const response = await api.get('/users');
//         return response.data.map((user) => new User(user)); // Transform data into User instances
//     } catch (error) {
//         console.error('Error fetching users:', error);
//         throw error;
//     }
// };

// Create a new user
export const createUser = async (userData) => {
    try {
        const response = await api.post('/signup', userData);
        return new User(response.data); // Transform data into a User instance
    } catch (error) {
        console.error('Error creating user:', error);
        throw error;
    }
};
