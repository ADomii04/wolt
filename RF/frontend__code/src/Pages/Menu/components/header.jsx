import { useContext } from "react"
import human from "../../../NavBar/NavElements/frame.svg"
import { Link } from "react-router-dom"
import { UserContext } from "../../../UserContext"


export default function Header(){
    const {user} = useContext(UserContext)
    return(
        <div className="w-full h-[80px] bg-[#e36f09] flex">
            <div className="w-[50%] h-full flex">
                <h1 className="text-white text-3xl font-bold ml-8 mt-4">Márka név</h1>
                <p className="text-white text-xl ml-20 mt-6 font-bold">{user.deliveryAdress}</p>
            </div>
            <div className="w-[50%] h-full flex">
                <div className="flex ml-[50%]">
                <Link to={"/Pizza_place/?showBag=true"}><div className={"pr-300  w-[51px] h-[51px] bg-[#fff] rounded-[18px] flex items-center justify-center mt-4 mr-8"}>
                    <img src={human} alt="human_svg" className={"h-[24px] w-[24px]"}/>
                </div></Link>
                <Link to={"/profile"}><div className={"pr-300  w-[51px] h-[51px] bg-[#fff] rounded-[18px] flex items-center justify-center mt-4 mr-8 "}>
                    <img src={human} alt="human_svg" className={"h-[24px] w-[24px]"}/>
                </div></Link>
                <h1 className="text-white font-bold text-3xl mt-4 ml-12"> Összeg:</h1>
                </div>
            </div>
        </div>
    )
}