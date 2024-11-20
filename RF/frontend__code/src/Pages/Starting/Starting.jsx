import {Link} from "react-router-dom";
import HomePageIMG from "../Home/home__img/HomePage.jpg"

export default function Starting(){
    return(
        <div className="w-screen h-screen flex flex-col justify-center items-center">
            <img src={HomePageIMG} className="w-[300px] h-[300px]" />
            <h1 className="text-4xl font-bold">Food to blow your mind</h1>
            <h3 className="text-2xl mt-16">Whether you're craving pizza, sushi or something in between, we have got your back</h3>
           <Link to={"/Signin"}><button className="w-[180px] h-[40px] bg-[#e36f09] rounded-xl text-white text-xl mt-8">Sign in</button></Link>
           <Link to={"/Signup"}><button className="w-[180px] h-[40px] bg-[#e36f09] rounded-xl text-white text-xl mt-4">Sign up</button></Link>
        </div>
    )
}