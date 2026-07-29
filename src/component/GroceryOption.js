import {GroceryGridCard} from "../utils/Grocery"
import Grocerycard from "./GroceryCard"

export default function GroceryOption(){

    return(
        <div className="mt-20 w-[80%] container mx-auto ">
            <h1 className="text-2xl font-bold">Shop Groceries on Instamart</h1>
         <div className="container mx-auto flex-nowrap flex overflow-x-auto mt-5   gap-4">
                    {
                         GroceryGridCard.map((foodData)=><Grocerycard key={foodData.id } foodData={foodData}></Grocerycard>)
                    }
                </div>
        </div>
    )
}