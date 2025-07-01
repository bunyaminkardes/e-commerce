import axiosInstance from "./axiosInstance";

export const getProductsByCategory = async (category) => {
    try {
        const response = await axiosInstance.get(`/api/product/category/${category}`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export const getProductsBySearch = async (searchQuery) => {
    try {
        const response = await axiosInstance.get(`/api/product/search/${searchQuery}`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export const getProductsById = async (id) => {
    try {
        const response = await axiosInstance.get(`/api/product/${id}`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}