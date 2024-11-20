import { useContext } from "react";
import { OrderContext } from "../../../OrderContext";


export default function OrdersMap(){
    const {order} = useContext(OrderContext);
    return (
        <main className={`p-[20px]`}>
            {order?.length > 0 ? (
                order.map((order) => (
                    <section key={order._id} className={`flex items-center rounded-xl border-black border mb-8 pt-[10px] pb-[10px]`}>
                        <div className="flex w-[full] h-[40px] ">
                            <h1 className="font-bold text-xl">{order.name}</h1>
                            <p className="text-lg ml-60">{order.price}</p>
                        </div>
                     </section>
            ))
        ) : (
            <p>Your order list is empty.</p>
            )}
        </main>
        );
}