import axiosInstance from "./axiosInstance";

export const getProductsByCategory = async (category) => {
    try {
        const response = await axiosInstance.get(`/api/products/category/${category}`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}