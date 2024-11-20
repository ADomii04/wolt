import {Link} from "react-router-dom";

import Home from "../NavBar/NavElements/home.svg"
import Bag from "../NavBar/NavElements/bag-2.svg"
import Orders from "../NavBar/NavElements/document-text.svg";
import Profile from "../NavBar/NavElements/frame.svg"

const NavBar = () => {
    return (
        <nav className={"sticky top-[70%] z-20 m-[22px]"}>
            <div >
                <ul className={" text-[10px] gap-16 z-10 absolute w-[100%] flex bg-white h-[65px] items-center justify-center rounded-[20px]"}>
                    <div className={"flex justify-center items-center"}>
                        <li>
                            <Link to="/" className={"flex flex-col items-center justify-center"}>
                                <img src={Home}/>Home</Link></li>
                    </div>
                    <div>
                        <li>
                            <Link to="/Bag" className={"flex flex-col items-center justify-center"}>
                                <img src={Bag}/>Bag</Link></li>
                    </div>
                    <div>
                        <li>
                            <Link to="/Orders" className={"flex flex-col items-center justify-center"}>
                                <img src={Orders}/>
                                <div>Orders</div>
                            </Link></li>
                    </div>
                    <div>
                        <li>
                            <Link to="/Profile" className={"flex flex-col items-center justify-center"}>
                                <img src={Profile}/>Profile</Link></li>
                    </div>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;