import { OrderContext } from "../../OrderContext"
import { useContext } from "react"
import OrdersMap from "./components/OrdersMap";

export default function Bag(){
    const {orders} = useContext(OrderContext);
    return(
        <div className="w-[500px] h-screen border-2 rounded-l-xl bg-white">
           <div className="w-full h-[120px] flex">
                <h1 className=" text-3xl font bold mr-[50%] mt-12 ml-8">Rendeléseid</h1>
                <div className="mt-4 rounded-full h-12 w-12 text-2xl font-bold bg-black text-white flex justify-center items-center">X</div>
           </div>

            <div class="rounded-full py-3 px-6 border-4 flex w-full ">
                <h1 className="border-4 rounded-full w-[220px] flex justify-center text-xl">Your order</h1>
                <h1 className="border-4 rounded-full w-[220px] flex justify-center text-xl">Last orders</h1>
            </div>
            {orders?.length === 0 ?(
                <div className="w-full h-[500px] flex flex-col justify-center items-center">
                    <h1 className="text-4xl font-bold">Your bag is empty</h1>
                    <p className="text-lg mt-2 p-8">When you add items from a restaurant or store, your order will be visible here. You can modify it anytime.</p>
                </div>
            ) : (
                <div>
                    <OrdersMap/>
                </div>
            )}
            <div className="flex justify-center items-center mt-20">
                <button className="w-[140px] h-[40px] bg-[#e36f09] rounded-xl text-white text-xl mt-8">Order</button>
            </div>
            
        </div>
    )
}