import Header from "./Header"
import FoodOption from "./FoodOption"
import GroceryOption from "./GroceryOption"
import DineOption from "./DineOption"
import SwiggyBanner from "./swiggybanner"
import CitiesSection from "./CitiesSection";
import Footer from "./Footer";


export default function Home(){


    return (
        <>
         <Header></Header>
         <FoodOption></FoodOption>
         <GroceryOption></GroceryOption>
         <DineOption></DineOption>
         <SwiggyBanner></SwiggyBanner>
         <CitiesSection></CitiesSection>
         <Footer></Footer>
         
        </>
    )
}