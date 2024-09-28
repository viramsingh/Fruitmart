import React, { useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { FaLeaf } from "react-icons/fa6";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { FaBarsStaggered } from "react-icons/fa6";
import ResponsiveMenu from "./ResponsiveMenu";
import { FaTimes } from "react-icons/fa";
import Profile from "../Profile/Profile";

const NavbarMenu = [
  {
    id: 1,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    title: "Shop Fruits",
    link: "/shop",
  },
  {
    id: 3,
    title: "About Us",
    link: "/about",
  },
  {
    id: 4,
    title: "Contact Us",
    link: "/contact",
  },
];

const Navbar = ({ cart }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const cartItemCount = cart.length;

  // Function to determine display text for cart item count
  const getCartItemCountDisplay = () => {
    return cartItemCount > 9 ? "9+" : cartItemCount;
  };

  // const location = useLocation();
  return (
    <>
      <nav className="sticky top-0 z-50 bg-white shadow-md">
        <div className="container flex items-center justify-between py-6 md:pt-4">
          {/* Logo Section */}
          <Link
            to="/"
            className="flex items-center gap-2 ml-1 text-2xl font-bold uppercase cursor-pointer"
          >
            <p className="text-primary ">Fruit</p>
            <p className="text-secondary">Mart</p>
            <FaLeaf className="text-green-500" />
          </Link>

          {/* Desktop Menu Section */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-6 text-gray-600">
              {NavbarMenu.map((menu) => (
                <li key={menu.id}>
                  <NavLink
                    to={menu.link}
                    className={` ${
                      location.pathname === "link" ? "active" : ""
                    } inline-block px-3 py-1 font-semibold transition-colors duration-300 hover:text-white hover:bg-secondary hover:shadow-lg hover:rounded-md`}
                  >
                    {menu.title}
                  </NavLink>
                </li>
              ))}
              {/* <Link
                to="/cart"
                className="relative p-2 text-2xl duration-200 rounded-full hover:bg-secondary hover:text-white"
              >
                <HiOutlineShoppingCart />
                {cartItemCount > 0 && (
                  <span className="absolute right-0 flex items-center justify-center w-8 h-8 text-black bg-red-500 rounded-full bottom-6">
                    {getCartItemCountDisplay()}
                  </span>
                )} 
              </Link> */}

              <Link
                to="/cart"
                onClick={() => setMenuOpen(false)}
                className="relative flex items-center mt-0 text-lg font-semibold text-gray-600 duration-200"
              >
                <HiOutlineShoppingCart className="ml-1 text-2xl" />
                {cartItemCount > 0 && (
                  <span className="absolute justify-center w-8 h-8 mt-4 ml-6 text-red-500 rounded-full bottom-2">
                    {cartItemCount > 9 ? "9+" : cartItemCount}
                  </span>
                )}
              </Link>
              <Profile />
            </ul>
          </div>

          {/* Mobile Hamburger Menu */}
          <div
            className="cursor-pointer md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <FaTimes className="text-3xl text-gray-600" />
            ) : (
              <FaBarsStaggered className="text-3xl text-gray-600" />
            )}
          </div>
        </div>
      </nav>

      {/* Mobile Menu Section */}
      <ResponsiveMenu
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        cartItemCount={cartItemCount}
      />
    </>
  );
};

export default Navbar;
