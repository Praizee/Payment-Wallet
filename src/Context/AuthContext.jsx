import React, { createContext, useContext, useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../Firebase/firebase.js';

// Create an authentication context
const AuthContext = createContext();

// Create a custom hook to access the context
export const useAuth = () => useContext(AuthContext);

// Create the AuthProvider component
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Your authentication logic here (e.g., check if the user is authenticated)
        // You can use Firebase, an API, or any other authentication method
        // For example, you can use Firebase Authentication

        // Sample code for Firebase Authentication (adjust to your needs)
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
            setLoading(false);
        });

        // Clean up the subscription
        return () => unsubscribe();
    }, []);

    return (
        <AuthContext.Provider value={{ user, loading }}>
            {children}
        </AuthContext.Provider>
    );
};
