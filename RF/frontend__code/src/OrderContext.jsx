import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const OrderContext = createContext({});

export function OrderContextProvider({ children }) {
    const [order, setOrder] = useState([]); 

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://wolt-4q9b.vercel.app/orders', { withCredentials: true });
                
                
                setOrder(Array.isArray(response.data) ? response.data : [response.data]);
            } catch (error) {
                console.error("Error fetching orders:", error);
                setOrder([]); 
            }
        };

        fetchData();
    }, []);

    return (
        <OrderContext.Provider value={{ order, setOrder }}>
            {children}
        </OrderContext.Provider>
    );
}
