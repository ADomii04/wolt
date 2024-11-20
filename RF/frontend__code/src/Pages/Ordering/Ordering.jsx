import axios from "axios";
import {pizzas} from "../Menu/Constans/pizzas"
import { useSearchParams } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../UserContext";

export default function Ordering(){
    const [searchParams] = useSearchParams();
    const {user} = useContext(UserContext)
    const pizzaId = parseInt(searchParams.get("pizza")); // Pizza ID lekérése
    const selectedPizza = pizzas.find((pizza) => pizza.id === pizzaId); // Pizza keresése

    async function handleOrders(event){
        event.preventDefault();
        try {
            await axios.post("http://localhost:4000/Addorders", {
                userId : user._id,
                name : selectedPizza.name,
                price : selectedPizza.price
            })
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <div className="w-screen h-screen flex justify-center items-center">
            <form className="w-[420px] h-[550px] border-2 border-black rounded-xl flex flex-col justify-center bg-white" onSubmit={handleOrders}>
                    <div className="flex w-full h-[200px] justify-center">
                        <img src={selectedPizza.image} alt="" className="w-[200px] h-[200px]" />
                    </div>
                    <div className="w-full h-[350px]">
                            <h1 className="text-3xl font-bold ml-8">{selectedPizza.name}</h1>
                            <p className="text-lg ml-8 mr-8 mt-4">{selectedPizza.description}</p>
                            <button className="w-[240px] h-[40px] bg-[#e36f09] rounded-xl text-white text-xl mt-20 ml-20">Hozzáad {selectedPizza.price}</button>
                    </div>
            </form>
        </div>
    )
}