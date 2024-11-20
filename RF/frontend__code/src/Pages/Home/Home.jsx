import Header from "./Components/Header.jsx";
import Search from "./Components/Search.jsx";
import PopularRestaurant from "./Components/PopularRestaurant.jsx";
import Restaurants from "./Components/Restaurants.jsx";
import AllRestraunt from "./Components/AllRestraunt.jsx";


const Home = () =>{
    return(
    <>
        <Header/>
        <Search/>
        <PopularRestaurant/>
        <Restaurants/>
        <AllRestraunt/>

    </>

    )
}

export default Home;