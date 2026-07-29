
const cities = [
  "Bangalore",
  "Gurgaon",
  "Hyderabad",
  "Delhi",
  "Mumbai",
  "Pune",
  "Kolkata",
  "Chennai",
  "Ahmedabad",
  "Chandigarh",
  "Jaipur",
];

export default function CitiesSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <h2 className="text-2xl font-bold mb-8">
        Cities with food delivery
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {cities.map((city) => (
          <button
            key={city}
            className="border border-gray-300 rounded-xl py-4 px-4 text-center hover:shadow-md hover:border-orange-500 transition-all"
          >
            Order food online in <br />
            <span className="font-semibold">{city}</span>
          </button>
        ))}

        <button className="border border-gray-300 rounded-xl py-4 px-4 font-semibold text-orange-500 hover:shadow-md">
          Show More
        </button>
      </div>
    </section>
  );
}