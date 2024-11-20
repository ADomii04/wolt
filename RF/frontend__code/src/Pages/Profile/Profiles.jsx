import axios from "axios";
import { UserContext } from "../../UserContext";
import { useContext, useState } from "react";


export default function Profiles () {

    const {user} = useContext(UserContext);
    const  [email, setEmail] = useState(user.email);
    const [password, setPassword] = useState(user.password);
    const [address, setAddress] = useState(user.deliveryAdress);
    const [phone, setPhone] = useState(user.phoneNumber);

    async function handleChange(event){
        event.preventDefault();
        try {
            await axios.post("http://localhost:4000/changeProfile", {
                email,
                password,
                userId : user._id
            }, {withCredentials: true});
        } catch (error) {
            console.log(error + " Hiba az adatok mentésében")
        }
    }
    async function handleOtherChanges(event) {
        event.preventDefault();
        try {
            await axios.post("http://localhost:4000/changeOtherInfo", {
                address,
                phone,
                userId : user._id,
            })
        } catch (error) {
            console.log(error);
        }
    }

    return(
        <div className="w-screen h-screen flex">
            
            <div className="w-[50%] h-full flex justify-center items-center ">
                    <form onSubmit={handleChange} className="flex flex-col w-[550px] h-[550px] rounded-lg border-black items-center shadow-xl">
                        <h1 className="text-3xl font-bold mt-8 text-[#e36f09]">Personal Informations</h1>
                        <h2 className="mt-8 text-xl font-semibold">{user.firstName} {user.lastName}</h2>
                        <label className="mt-8 text-lg font-semibold">Your Email:</label>
                        <input type="email"  
                            className="border-2 rounded-lg mt-4 w-[220px] border-[#e36f09]"
                            value={email}
                            onChange={ev => setEmail(ev.target.value)}
                            />
                        <label className="mt-8 text-lg font-semibold">Your Password:</label>
                        <input type="password"  
                            className="border-2 rounded-lg mt-4 w-[220px] border-[#e36f09]"
                            value={password}
                            onChange={ev => setPassword(ev.target.value)}
                            />
                        <button className="w-[180px] h-[40px] bg-[#e36f09] rounded-xl text-white text-xl mt-12">Save</button>
                    </form>
            </div>
            <div className="w-[50%] h-full flex justify-center items-center">
                    <form onSubmit={handleOtherChanges} className="flex flex-col w-[550px] h-[550px] rounded-lg border-black items-center shadow-xl">
                        <h1 className="text-3xl font-bold mt-8 text-[#e36f09]">Other Informations</h1>
                        <label className="mt-8 text-lg font-semibold">Payment method:</label>
                        <input type="email"  
                            className="border-2 rounded-lg mt-4 w-[220px] border-[#e36f09]"
                            value={email}
                            onChange={ev => setEmail(ev.target.value)}
                            />
                        <label className="mt-8 text-lg font-semibold">Your Address:</label>
                        <input type="text"  
                            className="border-2 rounded-lg mt-4 w-[220px] border-[#e36f09]"
                            value={address}
                            onChange={ev => setAddress(ev.target.value)}
                            />
                        <label className="mt-8 text-lg font-semibold">Your Phone number:</label>
                        <input type="text"  
                            className="border-2 rounded-lg mt-4 w-[220px] border-[#e36f09]"
                            value={phone}
                            onChange={ev => setPhone(ev.target.value)}
                            />
                        <button className="w-[180px] h-[40px] bg-[#e36f09] rounded-xl text-white text-xl mt-12">Save</button>
                    </form>
            </div>
        </div>
    );
}

