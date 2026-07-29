
export default function Grocerycard({foodData}){

    return(
     <div className=" flex-none">
     <a href="foodData?.action?.link">
     <img className="w-45 h-54 object-cover " src={"https://media-assets.swiggy.com/swiggy/image/upload/"+foodData?.imageId}></img>
     </a>
     <h2 className="text-sm text-center" >{foodData?.action?.text}</h2>
     </div>
    )
 }