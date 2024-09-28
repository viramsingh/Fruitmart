// ResponsiveMenu.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { HiOutlineShoppingCart } from "react-icons/hi";
// import { FaTimes } from "react-icons/fa";
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
  {
    id: 5,
    title: "FAQ",
    link: "/faq",
  },
];

const ResponsiveMenu = ({ menuOpen, setMenuOpen, cartItemCount }) => {
  return (
    <div
      className={`fixed inset-0 bg-white z-40 transform transition-transform duration-300 ${
        menuOpen ? "translate-x-0" : "translate-x-full"
      } md:hidden`}
    >
      <div className="flex items-center justify-between p-4 text-white border-b border-gray-300 bg-primary">
        <div className="flex items-center gap-2 text-2xl font-bold uppercase ">
          <p className="text-secondary">Fruit</p>
          <p className="text-primary">Mart</p>
        </div>
        <button onClick={() => setMenuOpen(false)} className="text-2xl">
          <FaTimes />
        </button>
      </div>
      <div className="flex flex-col p-4">
        {NavbarMenu.map((menu) => (
          <Link
            key={menu.id}
            to={menu.link}
            onClick={() => setMenuOpen(false)}
            className="py-2 text-lg font-semibold text-gray-700 hover:bg-secondary hover:text-white"
          >
            {menu.title}
          </Link>
        ))}
        <Link
          to="/cart"
          onClick={() => setMenuOpen(false)}
          className="flex items-center py-2 mt-0 text-lg font-semibold text-gray-700 hover:bg-secondary hover:text-white"
        >
          <HiOutlineShoppingCart className="mr-2 text-xl" />
          <span>Cart</span>
          {cartItemCount > 0 && (
            <span className="px-2 py-1 ml-2 text-sm text-white bg-red-500 rounded-full">
              {cartItemCount > 9 ? "9+" : cartItemCount}
            </span>
          )}
        </Link>
        <Profile />
        {/* profile  */}
      </div>
    </div>
  );
};

export default ResponsiveMenu;
