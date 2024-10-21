// ResponsiveMenu.jsx
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { HiOutlineShoppingCart } from "react-icons/hi";
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
          <NavLink
            key={menu.id}
            to={menu.link}
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              [
                isActive
                  ? " text-black bg-secondary px-3 py-2 font-semibold transitions-colors shadow-lg rounded-md  duration-300"
                  : "font-semibold py-3",
              ].join("")
            }
          >
            {menu.title}
          </NavLink>
        ))}

        <Profile />
      </div>
    </div>
  );
};

export default ResponsiveMenu;
