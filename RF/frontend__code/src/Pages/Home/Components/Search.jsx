
import search from "../../Home/home__img/search-normal.svg"

const Search = () => {
    return(

            <div className={" bg-[#101010] bg-opacity-10 rounded-[23px]" +
                " h-[61px] mx-[22px] mt-[15px]"}>
                <div className={"flex items-center w-[349px] h-[61px] pl-[19px]"}>
                    <img src={search} alt={"search logo"} className={"h-[24px] w-[24px]"}/>
                    <div className={"text-[#101010] pl-[34px]"}>Search for a vendor or product</div>

                </div>
            </div>

    )
}

export default Search;