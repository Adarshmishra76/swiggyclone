
import React , { useEffect, useState } from "react";
import { useParams } from "react-router";
import MenuCard from "./MenuCard"
import {Link} from "react-router"

export default function RestaurantMenu(){
   
    let {id} = useParams();
    const [selected ,setSelected] =useState(null)
    const [RestData, setRestData] = useState([]);

    useEffect(()=>{
        async function fetchData() {
           const proxyServer = "https://cors-anywhere.herokuapp.com/"
           const swiggyAPI = `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.83730&lng=80.91650&restaurantId=${id}`;
           
           const response = await fetch(proxyServer+swiggyAPI);
           const data = await response?.json();
           const tempData = data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
           const filterData = tempData.filter((items)=> 'title' in items?.card?.card);
           
           // Remove "Items starting at 529" section
           
            const filteredWithoutCombo = filterData.filter(
             (items) => {
               const title = items?.card?.card?.title;
               // Keep only items that don't start with "Items starting at"
               return title && !title.startsWith("Items starting at");
             }
           );
           
           setRestData(filteredWithoutCombo);
        }
   
        fetchData();
    },[])

    return(
        <div>
          <div className="w-[80%] mx-auto mt-20 mb-20">
            <Link to={`/city/lucknow/${id}/search`}>
            <p className=" w-full text-center py-4 rounded-4xl bg-gray-200 text-2xl>Search for Dishes"></p>
            </Link>
          </div>
        <div className="w-[80%] mx-auto mt-20 mb-20">
        <button className={`text-2xl py-2 px-8 mr-4 border rounded-2xl ${selected==="veg"? "bg-green-600": "bg-gray-300"} `} onClick={()=>setSelected(selected==='veg'?null:'veg')}>Veg</button>
        <button className={`text-2xl py-2 px-4 border rounded-2xl ${selected==="nonveg"? "bg-red-500": "bg-gray-300"}`} onClick={()=>setSelected(selected==='nonveg'?null:'nonveg')}>Non veg</button>
        </div>
        <div className="w-[80%] mx-auto mt-20">
          {
            RestData.map((menuItems) => {
              const cardData = menuItems?.card?.card || menuItems?.card;
              return <MenuCard key={cardData?.title} menuItems={cardData} foodselected={selected}/>
            })
          }
        </div>
        </div>
    )
}