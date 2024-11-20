import axios from "axios";
import { useState } from "react"
import { Navigate, redirect, useNavigate } from "react-router-dom";


export default function Signin(){

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();


    async function handleSignin(event){
      event.preventDefault();
      try {
          await axios.post("http://localhost:4000/signin",{
              email : email,
              password : password
          }, {withCredentials: true});
          navigate("/");
      } catch (error) {
          console.log(error + "Hiba az adatok átadásában")
      }
  }
  
  return (
        <div className="w-screen h-screen flex flex-col justify-center items-center">
            
            <form onSubmit={handleSignin} className="flex flex-col w-[350px] h-[400px] rounded-lg border-black items-center bg-[#dadada] shadow-xl">
              <h1 className="text-3xl font-bold mb-8 text-[#e36f09] mt-4">Sign in</h1>
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
                <button className="w-[140px] h-[40px] bg-[#e36f09] rounded-xl text-white text-xl mt-8">Sign in</button>
            </form>
        </div>
  )
}



