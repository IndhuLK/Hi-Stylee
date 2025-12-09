import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false); // desktop + mobile services dropdown
  const location = useLocation();

  // active path from URL
  const activePath = location.pathname;

  // Close menus when route changes
  useEffect(() => {
    setMobileMenu(false);
    setServiceOpen(false);
  }, [activePath]);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "How its Work", path: "/how-its-work" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services", hasDropdown: true },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Contact Us", path: "/contact" },
  ];

  // Services sub routes (3 path)
  const serviceLinks = [
    {
      label: "Interior Design",
      path: "/services/interior-design",
    },
    {
      label: "Dream Home",
      path: "/services/dream-home",
    },
    {
      label: "Business Interior",
      path: "/services/business-design",
    },
  ];

  // Helper: check if any service route is active
  const isServiceActive =
    activePath.startsWith("/services") ||
    serviceLinks.some((s) => s.path === activePath);

  return (
    <div className="w-full shadow-md font-family">
      {/* Top Quote */}
      <div className="bg-[#0b4161] text-white text-center text-sm py-2">
        Design is intelligence made visible — and livable
      </div>

      {/* Navbar */}
      <div className="max-w-7xl mx-auto flex justify-between items-center px-5 py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src="/logo.png" alt="logo" className="h-10 object-contain" />
          <span className="font-semibold text-lg">
            HI-STYLEE <span className="text-sm">Furniture</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          {navItems.map((item) => (
            <li key={item.name} className="relative">
              {/* If Services (dropdown) */}
              {item.hasDropdown ? (
                <>
                  <button
                    type="button"
                    onClick={() => setServiceOpen((prev) => !prev)}
                    className={`flex items-center gap-1 transition ${
                      isServiceActive
                        ? "text-blue-900 font-semibold"
                        : "hover:text-blue-900"
                    }`}
                  >
                    {item.name}
                    <ChevronDown
                      size={14}
                      className={`transition-transform ${
                        serviceOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Underline for Services when active */}
                  <div
                    className={`absolute bottom-[-6px] left-0 right-0 h-[2px] bg-blue-900 transition-transform duration-300 origin-left ${
                      isServiceActive ? "scale-x-100" : "scale-x-0"
                    }`}
                  ></div>

                  {/* Dropdown (Desktop) – click based & strong */}
                  {serviceOpen && (
                    <div className="absolute top-full left-0 mt-2 flex flex-col bg-white shadow-lg rounded-md w-56 p-3 z-50">
                      {serviceLinks.map((service) => (
                        <Link
                          key={service.path}
                          to={service.path}
                          className={`py-2 text-sm text-left rounded-md px-2 transition ${
                            activePath === service.path
                              ? "text-blue-900 font-semibold bg-blue-50"
                              : "text-gray-700 hover:text-blue-900 hover:bg-gray-50"
                          }`}
                        >
                          {service.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <>
                  <Link
                    to={item.path}
                    className={`transition ${
                      activePath === item.path
                        ? "text-blue-900 font-semibold"
                        : "hover:text-blue-900"
                    }`}
                  >
                    {item.name}
                  </Link>

                  {/* Smooth Underline */}
                  <div
                    className={`absolute bottom-[-6px] left-0 right-0 h-[2px] bg-blue-900 transition-transform duration-300 origin-left ${
                      activePath === item.path ? "scale-x-100" : "scale-x-0"
                    }`}
                  ></div>
                </>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenu((prev) => !prev)}
        >
          {mobileMenu ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenu && (
        <div className="md:hidden bg-white px-6 py-4 shadow-lg space-y-3 font-medium text-center">
          {navItems.map((item) => (
            <div key={item.name}>
              {/* Services (with dropdown) */}
              {item.hasDropdown ? (
                <>
                  <button
                    type="button"
                    className="w-full flex justify-center items-center gap-2 border-b border-gray-100 pb-2"
                    onClick={() => setServiceOpen((prev) => !prev)}
                  >
                    {item.name}
                    <ChevronDown
                      size={16}
                      className={`transition-transform ${
                        serviceOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {serviceOpen && (
                    <div className="pt-2 space-y-2">
                      {serviceLinks.map((service) => (
                        <Link
                          key={service.path}
                          to={service.path}
                          className="block text-gray-600"
                          onClick={() => {
                            setMobileMenu(false);
                            setServiceOpen(false);
                          }}
                        >
                          {service.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  to={item.path}
                  onClick={() => setMobileMenu(false)}
                  className={`block border-b border-gray-100 pb-2 ${
                    activePath === item.path
                      ? "text-blue-900 font-semibold"
                      : ""
                  }`}
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
