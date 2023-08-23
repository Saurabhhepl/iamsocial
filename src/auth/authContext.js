// AuthContext.js
import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    JSON.parse(localStorage.getItem("user")) || null;
    const storedUsername = localStorage.getItem('username');


    const login = (storedUsername) => {
        setUser(storedUsername);
    };
    useEffect(() => {
        localStorage.setItem("username", JSON.stringify(storedUsername));
      }, [storedUsername]);
    

    const logout = () => {
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};
