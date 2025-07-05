import { createContext, useState, useEffect, useContext } from "react";
import { getAuthenticatedUser } from "../api/auth";

const authContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const data = await getAuthenticatedUser();
                setUser(data.user);
            } catch (error) {
                setUser(null);
            }
        };
        fetchUser();
    }, []);

    return (
        <authContext.Provider value={{ user, setUser }}>
            {children}
        </authContext.Provider>
    );
};

export const useAuth = () => useContext(authContext);