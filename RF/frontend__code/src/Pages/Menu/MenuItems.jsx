import React from 'react';
import { Link } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';


import {pizzas} from './Constans/pizzas';

function Menu() {

    const [searchParams] = useSearchParams();
    const show = searchParams.get("show") === "true";
    const showBag = searchParams.get("showBag") === "true";

    return (
        <main className={`p-[20px] ${show ? "filter blur-sm" : "" } ${showBag ? "filter blur-sm" : "" }`}>
            {pizzas.map((pizza) => (
               <Link to={`?show=true&pizza=${pizza.id}`}> <section key={pizza.id} className={`flex items-center border-[1px] border-[#ddd] pt-[10px] pb-[10px] `}>
                    <img src={pizza.image} alt={pizza.name} className="w-[180px] h-[180px] mr-[15px] rounded-lg object-cover" />
                    <div className="menu-info">
                        <h3>{pizza.name}</h3>
                        <p>{pizza.description}</p>
                        <p className="price">{pizza.price}</p>
                    </div>
                </section></Link>
            ))}
        </main>
    );
}

export default Menu;
