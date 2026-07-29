
export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-white mt-12">
      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">

          {/* Logo */}
          <div>
            <h2 className="text-3xl font-bold text-orange-500">Swiggy</h2>
            <p className="text-gray-400 mt-2">
              © 2026 Swiggy Limited
            </p>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li>About</li>
              <li>Careers</li>
              <li>Team</li>
              <li>Swiggy One</li>
              <li>Swiggy Instamart</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Help & Support</li>
              <li>Partner with us</li>
              <li>Ride with us</li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Legal</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Terms & Conditions</li>
              <li>Cookie Policy</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Follow Us</h3>

            <div className="flex gap-4 text-2xl">
              <span className="cursor-pointer hover:text-orange-500">
                📘
              </span>
              <span className="cursor-pointer hover:text-orange-500">
                📷
              </span>
              <span className="cursor-pointer hover:text-orange-500">
                🐦
              </span>
              <span className="cursor-pointer hover:text-orange-500">
                💼
              </span>
            </div>
          </div>

        </div>

        <hr className="border-gray-700 my-8" />

        <p className="text-center text-gray-400 text-sm">
          Made with ❤️ using React & Tailwind CSS
        </p>

      </div>
    </footer>
  );
}