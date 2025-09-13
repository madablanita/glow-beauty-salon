const Footer = () => {
  return (
    <footer className="bg-orange-400/30 backdrop-blur-lg text-gray-800 py-4 mt-0 px-4">
      <div className="max-w-4xl mx-auto text-center grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
        
        <div>
          <h3 className="font-semibold mb-1 text-orange-600">Salon Address</h3>
          <p>353 Lexington Avenue, New York, NY</p>
        </div>

        <div>
          <h3 className="font-semibold mb-1 text-orange-600">Working Hours</h3>
          <p><strong className="text-black">Mon - Fri:</strong> 10:00 - 18:00</p>
          <p><strong className="text-black">Saturday:</strong> 11:00 - 15:00</p>
          <p><strong className="text-black">Sunday:</strong> Closed</p>
        </div>

        <div>
          <h3 className="font-semibold mb-1 text-orange-600">Quick Links</h3>
          <ul className="space-y-1">
            <li>
              <a
                href="#appointment"
                className="text-gray-800 hover:text-orange-600 transition"
              >
                Book a service
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-gray-800 hover:text-orange-600 transition"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="text-gray-800 hover:text-orange-600 transition"
              >
                Services
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center text-xs text-gray-700 mt-4">
        &copy; {new Date().getFullYear()} GLOW Beauty Salon. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
