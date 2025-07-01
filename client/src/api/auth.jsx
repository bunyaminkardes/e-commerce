import axiosInstance from "./axiosInstance";

export const loginUser = async (email, password) => {
    const data = {
        email: email,
        password: password
    }
    try {
        const response = await axiosInstance.post('/api/auth/login', data);
        return response.data;
    } catch (error) {
        console.error(error.response.data.message);
        //throw error;
    }
}

export const registerUser = async (email, password) => {
    const data = {
        email: email,
        password: password
    }
    try {
        const response = await axiosInstance.post('/api/auth/register', data);
        return response.data;
    } catch (error) {
        console.error(error.response.data.message);
    }
}