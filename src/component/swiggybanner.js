
export default function SwiggyBanner() {
  return (
    <div className="max-w-6xl mx-auto my-12 px-4">
      <div className="bg-[#0D1117] rounded-2xl py-12 px-10">

        <div className="flex items-center gap-3 mb-6">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/1/13/Swiggy_logo.png"
            alt="Swiggy"
            className="w-10 h-10"
          />
          <span className="text-2xl font-bold text-orange-500">
            Swiggy
          </span>
        </div>

        <h1 className="text-4xl font-bold text-white">
          Get the Swiggy App now!
        </h1>

        <p className="mt-4 text-lg text-gray-400">
          For best offers and discounts curated specially for you.
        </p>

      </div>
    </div>
  );
}