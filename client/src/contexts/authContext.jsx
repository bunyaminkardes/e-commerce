import { createContext, useState, useEffect, useContext } from "react";
import axiosInstance from "../api/axiosInstance";

const authContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axiosInstance.get("/api/user/me");
                setUser(response.data.user);
            } catch (error) {
                setUser(null);
            }
        };
        fetchUser();
    }, []);

    return (
        <authContext.Provider value={{user, setUser}}>
            {children}
        </authContext.Provider>
    );
};

export const useAuth = () => useContext(authContext);