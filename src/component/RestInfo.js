
import { useState } from "react"
import {addItems, IncrementItems, DecrementItems} from "../stored/CartSlicer"
import { useDispatch, useSelector } from "react-redux";

export default function RestInfo({restData}){
    const dispatch = useDispatch();
    const items = useSelector(state => state.cartslice.items);
    
    const element = items.find(item => item.id === restData.id);
    const count = element ? element.quantity : 0;
    
    function handleAdditems(){
        dispatch(addItems(restData));
    }
    
    function handleIncrementItems(){
        dispatch(IncrementItems(restData));
    }
    
    function handleDecrementItems(){
        dispatch(DecrementItems(restData));
    }

    return (
        <div className="flex justify-between border-b mb-2 pd-2 border-gray-200 py-4">
            <div className="w-[70%]">
                <p className="font-medium">{restData?.name}</p>
                <p className="font-semibold">{"₹" + (restData?.defaultPrice / 100 || restData?.price / 100)}</p>
                {restData?.ratings?.aggregatedRating?.rating && (
                    <div className="flex items-center gap-2">
                        <span className="text-green-700">⭐ {restData?.ratings?.aggregatedRating?.rating}</span>
                        <span className="text-gray-500">({restData?.ratings?.aggregatedRating?.ratingCountV2})</span>
                    </div>
                )}
                <p className="text-gray-500 text-sm mt-2">
                    {restData?.description}
                </p>
            </div>
            <div className="w-[20%] relative">
                {restData?.imageId && (
                    <img 
                        className="w-full h-36 object-cover rounded-lg" 
                        src={"https://media-assets.swiggy.com/swiggy/image/upload/" + restData?.imageId} 
                        alt={restData?.name}
                    />
                )}
                <div className="absolute -bottom-4 left-0 right-0 flex justify-center">
                    {count === 0 ? (
                        <button 
                            onClick={handleAdditems} 
                            className="text-green-600  font-bold px-6 py-2 bg-white border border-gray-300 
                                     rounded-lg shadow-md hover:shadow-lg transition-shadow whitespace-nowrap"
                        >
                            ADD
                        </button>
                    ) : (
                        <div className="flex gap-3 text-xl text-green-600 px-2 py-2 shadow-md border border-gray-300 bg-white rounded-2xl">
                            <button 
                                onClick={handleDecrementItems}
                                className="hover:bg-gray-100 px-2 rounded"
                            >
                                -
                            </button>
                            <span className="min-w-[20px] text-center">{count}</span>
                            <button 
                                onClick={handleIncrementItems}
                                className="hover:bg-gray-100 px-2 rounded"
                            >
                                +
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}