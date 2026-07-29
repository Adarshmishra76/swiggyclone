import { Link } from "react-router";

export default function RestCard({ restInfo }) {

  return (
    <Link to={"/city/lucknow/"+ restInfo?.info?.id}>
    <div className="max-w-70 mb-2 transform transition duration-200 hover:scale-95">
      
      {/* Image */}
      <img
        className="w-full h-45 object-cover rounded-xl"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/" +
          restInfo?.info?.cloudinaryImageId
        }
        alt="restaurant"
      />

      {/* Content */}
      <div className="p-2 flex flex-col gap-1">
        
        {/* Name */}
        <h2 className="font-bold text-xl truncate">
          {restInfo?.info?.name}
        </h2>

        {/* Rating + Time */}
        <div className="flex items-center gap-3 text-sm text-gray-700">
          
          {/* ⭐ Rating with green background */}
          <div className="flex items-center gap-1 bg-green-600 text-white px-2 py-[2px] rounded">
            
            {/* SVG Star */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
              className="w-3 h-3"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.93 8.72c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
            </svg>

            <span className="text-lg">{restInfo?.info?.avgRating}</span>
          </div>

          {/* Time */}
          <span className=" text-lg ">{restInfo?.info?.sla?.slaString}</span>
        </div>
        <div className="text-gray-600 text-xl mt-1 h-7 overflow-hidden">{restInfo?.info?.cuisines.join(" ")}</div>

      </div>
    </div>
    </Link>
  );
}