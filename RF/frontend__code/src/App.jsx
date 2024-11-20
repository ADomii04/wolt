import './App.css'
import './index.css'; // Itt történik a CSS (és Tailwind) betöltése

import Home from "./Pages/Home/Home.jsx";
import Bag from "./Pages/Bag/Bag.jsx";
import Profiles from "./Pages/Profile/Profiles.jsx";
import Starting from './Pages/Starting/Starting.jsx';
import Signin from './Pages/Signin/Signin.jsx';
import Signup from './Pages/Signup/Signup.jsx';
import Menu from './Pages/Menu/Menu.jsx';
import { UserContextProvider } from './UserContext.jsx';
import { OrderContextProvider } from './OrderContext.jsx';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar/NavBar.jsx";


function App() {

  return (
    <UserContextProvider>
      <OrderContextProvider>
          <Router>
                  <Routes>
                      <Route path="/" element={<Home/>}/>
                      <Route path="/Bag" element={<Bag/>}/>
                      <Route path="/Profile" element={<Profiles/>}/>
                      <Route path='/Start' element={<Starting/>}/>
                      <Route path='/Signin' element={<Signin/>}/>
                      <Route path='/Signup' element={<Signup/>}/>
                      <Route path='/Pizza_place' element={<Menu/>}></Route>
                  </Routes>
          </Router>
      </OrderContextProvider>
    </UserContextProvider>
  )
}

export default App
