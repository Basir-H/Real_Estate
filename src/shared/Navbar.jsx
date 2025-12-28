import { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link'; // ✅ اضافه شد
import navLinks from "../constants";
import { dropdown, logo, moon } from "../assets";
import { Button } from "../components";
import { FaArrowRight } from "react-icons/fa6";
import { FiMenu, FiX } from "react-icons/fi";
import '../App.css';

function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleDropdown = (id) => {
    setOpenDropdown((prev) => (prev === id ? null : id));
  };

  // تابع کمکی برای HashLink
  const renderLink = (item) => {
    if (item.value === "Featured Property") {
      return (
        <HashLink
          smooth
          to="/#featuredProp"
          onClick={() => {
            setMenuOpen(false);
            setOpenDropdown(null);
          }}
          className="block px-4 py-2 text-sm hover:bg-gray-100 transition"
        >
          {item.value}
        </HashLink>
      );
    } else if (item.value === "Blog") {
      return (
        <HashLink
          smooth
          to="/#blog"
          onClick={() => {
            setMenuOpen(false);
            setOpenDropdown(null);
          }}
          className="block px-4 py-2 text-sm hover:bg-gray-100 transition"
        >
          {item.value}
        </HashLink>
      );
    } else {
      return (
        <Link
          to={item.path}
          onClick={() => {
            setMenuOpen(false);
            setOpenDropdown(null);
          }}
          className="block px-4 py-2 text-sm hover:bg-gray-100 transition"
        >
          {item.value}
        </Link>
      );
    }
  };

  return (
    <nav className="relative w-full px-[1rem] sm:px-[3rem] md:px-[6rem] lg:px-[10rem] py-[1.5rem] flex items-center justify-between bg-white z-50">
      
      {/* Logo */}
      <img src={logo} alt="logo" className="w-[9rem] h-[2.3rem]" />

      {/* Desktop Nav */}
      <ul className="hidden lg:flex items-center gap-[2rem]">
        {navLinks.map((link) => (
          <li key={link.id} className="relative">
            {!link.dropdown ? (
              <Link
                to={link.path}
                className="text-[rgba(16,45,71,1)] hover:text-blue-600 transition"
              >
                {link.value}
              </Link>
            ) : (
              <>
                <button
                  onClick={() => handleDropdown(link.id)}
                  className="flex items-center gap-1 text-[rgba(16,45,71,1)] hover:text-blue-600 transition"
                >
                  {link.value}
                  <img
                    src={dropdown}
                    alt=""
                    className={`w-3 transition-transform duration-300 ${
                      openDropdown === link.id ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Dropdown */}
                <ul
                  className={`absolute top-full left-0 mt-3 w-44 bg-white border rounded-md shadow-lg overflow-hidden transition-all duration-300 ${
                    openDropdown === link.id
                      ? "opacity-100 translate-y-0 visible"
                      : "opacity-0 -translate-y-2 invisible"
                  }`}
                >
                  {link.items.map((item, index) => (
                    <li key={index}>
                      {renderLink(item)}
                    </li>
                  ))}
                </ul>
              </>
            )}
          </li>
        ))}
      </ul>

      {/* Desktop Buttons */}
      <div className="hidden lg:flex items-center gap-[1rem]">
        <button>
          <img src={moon} alt="" className="w-[20px] h-[20px]" />
        </button>
        <Link to={'/signin'}> 
          <Button className="flex items-center gap-[10px]">
            Sign In <FaArrowRight size={14} />
          </Button>
        </Link>
        <Link to={'/signup'}>
          <Button variant="outline" className="flex items-center gap-[10px]">
            Sign Up<FaArrowRight size={14} />
          </Button>
        </Link> 
      </div>

      {/* Mobile Menu Button */}
      <button
        className="lg:hidden text-2xl"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FiX /> : <FiMenu />}
      </button>

      {/* Mobile Menu */}
      <div
        className={`absolute top-full left-0 w-full bg-white shadow-lg lg:hidden transition-all duration-500 ${
          menuOpen
            ? "opacity-100 translate-y-0 visible"
            : "opacity-0 -translate-y-5 invisible"
        }`}
      >
        <ul className="flex flex-col gap-5 p-6">
          {navLinks.map((link) => (
            <li key={link.id}>
              {!link.dropdown ? (
                <Link
                  to={link.path}
                  onClick={() => setMenuOpen(false)}
                  className="block"
                >
                  {link.value}
                </Link>
              ) : (
                <>
                  <button
                    onClick={() => handleDropdown(link.id)}
                    className="flex justify-between w-full"
                  >
                    {link.value}
                    <img
                      src={dropdown}
                      alt=""
                      className={`w-3 transition-transform ${
                        openDropdown === link.id ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {openDropdown === link.id && (
                    <ul className="pl-4 mt-3 flex flex-col gap-2 animate-dropdown">
                      {link.items.map((item, index) => (
                        <li key={index}>
                          {renderLink(item)}
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              )}
            </li>
          ))}

          {/* Mobile Buttons */}
          <div className="flex flex-col gap-3 pt-4">
            <Button><Link to={'/signin'}>Sign In</Link></Button>
            <Button variant="outline"><Link to={'/signup'}>Sign Up</Link></Button>
          </div>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
