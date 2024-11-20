import human from '../../../NavBar/NavElements/frame.svg'
import { UserContext } from '../../../UserContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

function Header(){

    const {user} = useContext(UserContext)
    return (

        <div className={"h-[85px] flex justify-between mx-[22px] mt-[16px] items-center"}>
            <div className={" w-[80%] h-[51px]"}>
                {user ? (
                    <div className={"text-xl font-bold"}>Deliver to: {user.deliveryAdress}</div>
                ):(0)}
                
            </div>
            {user ?(
                <div className='flex'>
                    <Link to={"/bag"}><div className={"pr-300  w-[51px] h-[51px] bg-[#CF8600] rounded-[18px] flex items-center justify-center bg-opacity-40 mr-8"}>
                        <img src={human} alt="human_svg" className={"h-[24px] w-[24px]"}/>
                    </div></Link>
                    <Link to={"/profile"}><div className={"pr-300  w-[51px] h-[51px] bg-[#CF8600] rounded-[18px] flex items-center justify-center bg-opacity-40"}>
                        <img src={human} alt="human_svg" className={"h-[24px] w-[24px]"}/>
                    </div></Link>
                </div>
                
            )
            :(
                <div>
                    <button>Sign in</button>
                    <button>Sign up</button>
                </div>
            )}
           
        </div>

    )
}



export default Header;
