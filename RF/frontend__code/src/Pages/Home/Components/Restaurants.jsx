import "../../Home/css/RestrauntStyle.css";
import ball from "../../Home/home__img/BTN.svg"
import star from "../../Home/home__img/Star_on.svg"
import pick from "../../Home/home__img/location-minus.svg"
import star_off from "../../Home/home__img/Star_off.svg"
import { Link } from "react-router-dom";

import {restaurants} from "../Constans/Datas.js"


function Restaurants  (){
    return (
        //mechanical
        <>


            <div className={" flex  gap-4 w-[100%] items-center"}>
                {restaurants.map((restaurant, index) => {
                    return (
                        <div key={index} className={"  w-[350px] relative h-[280px]"}>
                            <div className="cut h-[217px] m-0  w-[350px]">
                                <img src={restaurant.image} alt="Cinque Terre"/>
                            </div>
                           <Link to={restaurant.link}><img src={ball} className={"absolute top-[160px] right-0 w-[70px] h-[70px]"}/></Link>
                            <div className={" relative w-[350px]"}>
                                <div>{restaurant.name}</div>
                                <div className={"flex justify-between"}>
                                    <div className={"flex "}>
                                        {Array.from({length: restaurant.rating}).map((_, i) => (
                                            <img key={i} src={star} className={"w-[18px] h-[18px]"}/>
                                        ))}
                                        {Array.from({length: (5 - restaurant.rating)}).map((_, i) => (
                                            <img key={i} src={star_off} className={"w-[18px] h-[18px]"}/>
                                        ))}
                                    </div>
                                    <div className={"flex flex-wrap mt"}>
                                       <img src={pick} className={"mr-[20px]"}/>
                                        <div className={"text-[13px]"}>{restaurant.distance}</div>
                                    </div>

                                </div>
                            </div>
                        </div>

                    );

                })}

            </div>


        </>

    )
}

export default Restaurants;