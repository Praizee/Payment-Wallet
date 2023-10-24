import { createContext, useContext, useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { getDatabase, ref, get } from 'firebase/database';
import { auth } from '../Firebase/firebase.js';

const AppContext = createContext();

export const useAppContext = () => {
    return useContext(AppContext);
};

export const AppProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (authUser) => {
            if (authUser) {
                const { uid, email } = authUser;

                const db = getDatabase();
                const userRef = ref(db, 'users/' + uid);

                try {
                    const snapshot = await get(userRef);
                    if (snapshot.exists()) {
                        const userData = snapshot.val();
                        const { firstName, lastName } = userData;

                        setUser({
                            uid,
                            email,
                            firstName,
                            lastName,
                            // Add other user data fields here
                        });
                    } else {
                        // Handle the case where user data does not exist in the database
                    }
                } catch (error) {
                    // Handle database retrieval errors
                    console.error('Error fetching user data:', error);
                }
            } else {
                setUser(null); // No authenticated user
            }
            setLoading(false);
        });

        // Clean up the subscription
        return () => unsubscribe();
    }, []);

    return (
        <AppContext.Provider value={{ user, setUser, loading }}>
            {children}
        </AppContext.Provider>
    );
};
