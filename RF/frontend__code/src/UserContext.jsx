
import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://wolt-4q9b.vercel.app/profile', { withCredentials: true });
                setUser(response.data);
            } catch (error) {
                console.error("Error fetching user data:", error);
                setUser(null);
            }
        };

        fetchData();
    }, []);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
}
