import React, { useEffect, useState } from 'react';
import './App.css';
import MenuItems from "./MenuItems"
import img from "./images/img.png"
import Header from './components/header';
import { useSearchParams } from 'react-router-dom';
import Ordering from '../Ordering/Ordering';
import Bag from '../Bag/Bag';

function App()
{
  const [pizzas, setPizzas] = useState([]);
  const [searchParams] = useSearchParams();
  const show = searchParams.get("show") === "true";
  const showBag = searchParams.get("showBag") === "true";

  useEffect(() => {
    fetch('/pizzas.json')
        .then((response) => response.json())
        .then((data) => setPizzas(data))
        .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="color-[#333]">
      <header className={`relative items-center ${show ? "filter blur-sm" : "" } ${showBag ? "filter blur-sm" : "" }`}>
      <Header/>
        <img 
          src={img}
          alt="Pizza" 
          className="w-full h-[300px] object-cover" 
        />
        <div className="absolute top-[80px] left-[10px] text-white">
          <h1 className='text-4xl font-bold mt-8'>The Pizza Place</h1>
          <p>2km away</p>
          <div className="flex justify-between">
            <p className='mt-8 text-lg'>20-30 mins delivery</p>
          </div>
          <p className="mt-4 font-bold text-xl">Free delivery on orders above $50</p>
        </div>
      </header>

      <nav className={`flex justify-around mt-[10px] mb-[10px] border ${show ? "filter blur-sm" : ""} ${showBag ? "filter blur-sm" : ""}`}>
        <button className='font-bold pt-[10px] pb-[10px] pl-[20px] pr-[20px]'>Combo deals</button>
        <button className='font-bold pt-[10px] pb-[10px] pl-[20px] pr-[20px]'>Classic Pizza</button>
        <button className='font-bold pt-[10px] pb-[10px] pl-[20px] pr-[20px]'>Premium Pizza</button>
        <button className='font-bold pt-[10px] pb-[10px] pl-[20px] pr-[20px]'>Sides</button>
      </nav>

      <MenuItems pizzas={pizzas} />
      {show && (
      <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center z-50">
        <Ordering />
      </div>
    )}
    {showBag &&(
      <div className='fixed top-0 right-0 w-auto h-screen flex justify-center items-center z-50'>
        <Bag/>
      </div>
    )}
    </div>
  );
}

export default App;
