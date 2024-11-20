import axios from "axios";
import { useState } from "react"
import { Navigate, useNavigate } from "react-router-dom";

export default function Signup(){
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    async function handleSignup(event){
        event.preventDefault();
        try {
            await axios.post("https://wolt-4q9b.vercel.app/signup",{
                firstName : firstName,
                lastName : lastName,
                email : email,
                password : password
            });
            navigate("/singin");
        } catch (error) {
            console.log(error + "Hiba az adatok átadásában")
        }
    }

    return (
        <div className="w-screen h-screen flex flex-col justify-center items-center">
            
            <form onSubmit={handleSignup} className="flex flex-col w-[450px] h-[500px] rounded-lg border-black items-center bg-[#dadada] shadow-xl">
              <h1 className="text-3xl font-bold mb-8 text-[#e36f09] mt-4">Sign up</h1>
              <label className="text-lg font-bold">First Name</label>
              <input 
                className="border-2 border-black rounded-lg mb-4"
                type="text"
                value={firstName}
                onChange={ev => setFirstName(ev.target.value)}
              />
              <label className="text-lg font-bold">Last Name</label>
              <input 
                className="border-2 border-black rounded-lg mb-4"
                type="text" 
                value={lastName}
                onChange={ev => setLastName(ev.target.value)}
              />
              <label className="text-lg font-bold">Email</label>
              <input 
                className="border-2 border-black rounded-lg mb-4"
                type="email"
                value={email}
                onChange={ev => setEmail(ev.target.value)}
                />
              <label className="text-lg font-bold">Password</label>
              <input 
                className="border-2 border-black rounded-lg mb-4"
                type="password"
                value={password}
                onChange={ev => setPassword(ev.target.value)}
                />
                <button className="w-[140px] h-[40px] bg-[#e36f09] rounded-xl text-white text-xl mt-8">Sign up</button>
            </form>
        </div>
      )
}
