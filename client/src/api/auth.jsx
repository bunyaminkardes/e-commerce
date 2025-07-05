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
        throw error;
    }
}

export const logoutUser = async () => {
    try {
        const response = await axiosInstance.post('/api/auth/logout');
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const getAuthenticatedUser = async () => {
    try {
        const response = await axiosInstance.get("/api/user/me");
        return response.data;
    } catch (error) {
        throw error;
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
        throw error;
    }
}