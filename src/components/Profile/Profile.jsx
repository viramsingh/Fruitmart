import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaRegCircleUser } from "react-icons/fa6";
import { NavLink, Link } from "react-router-dom";
import Register from "../../Pages/Ragister";

const Profile = () => {
  const [isDropdownOpen, setSetisDropdownOpen] = useState(false);

  const toggleDropDwon = () => {
    setSetisDropdownOpen(!isDropdownOpen);
  };
  return (
    <div>
      <div className="flex text-2xl cursor-pointer " onClick={toggleDropDwon}>
        <FaRegCircleUser />
        <IoMdArrowDropdown />

        {isDropdownOpen && (
          <div className="absolute w-40 mt-4 text-xl bg-white border border-gray-200 rounded shadow-lg right-15 z-99 top-19">
            <ul className="py-1">
              <li className="px-8 py-1 m-auto cursor-pointer hover:bg-gray-100">
                <Link to="/login">Login</Link>
              </li>
              <li className="px-8 py-2 cursor-pointer hover:bg-gray-100">
                <Link to="/register">Register</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;