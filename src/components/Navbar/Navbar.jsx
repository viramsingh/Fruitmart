import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
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

  const getCartItemCountDisplay = () => {
    return cartItemCount > 9 ? "9+" : cartItemCount;
  };

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
                    className={({ isActive }) =>
                      [
                        isActive
                          ? " text-white bg-secondary px-3 py-2 font-semibold transitions-colors shadow-lg rounded-md  duration-300"
                          : "font-semibold",
                      ].join("")
                    }
                  >
                    {menu.title}
                  </NavLink>
                </li>
              ))}

              <Profile />
            </ul>
          </div>

          {/* Mobile Hamburger Menu */}
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
