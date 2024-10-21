import React from "react";
import {
  FaHeart,
  FaLeaf,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-8 text-white bg-gray-800">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col justify-between lg:flex-row">
          <div className="flex flex-col gap-3 mb-6 lg:w-1/4 lg:mb-0">
            <div className="flex items-center gap-2 text-2xl font-bold uppercase ">
              <p className="text-primary">Fruit</p>
              <p className="text-secondary">Mart</p>
              <FaLeaf className="text-green-500" />
            </div>

            <p className="text-sm font-averia">
              FruitMart is your one-stop shop for the freshest and finest
              quality fruits. We pride ourselves on delivering the best products
              directly from farms to your table.
            </p>
          </div>

          {/* Useful Links */}
          <div className="mb-6 lg:w-1/4 lg:mb-0">
            <h3 className="mb-4 text-lg font-bold font-poppins">
              Useful Links
            </h3>
            <ul className="text-sm font-averia">
              <li className="mb-2">
                <Link to="/shop" className="hover:text-primary">
                  Shop
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/about" className="hover:text-primary">
                  About Us
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/contact" className="hover:text-primary">
                  Contact Us
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/faq" className="hover:text-primary">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="mb-6 lg:w-1/4 lg:mb-0">
            <h3 className="mb-4 text-lg font-bold font-poppins">Categories</h3>
            <ul className="text-sm font-averia">
              <li className="mb-2">
                <Link to="/" className="hover:text-primary">
                  Fresh Fruits
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/" className="hover:text-primary">
                  Exotic Fruits
                </Link>
              </li>
              <li className="mb-2">
                <Link to="" className="hover:text-primary">
                  Seasonal Fruits
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/" className="hover:text-primary">
                  Organic Fruits
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="lg:w-1/4">
            <h3 className="mb-4 text-lg font-bold font-poppins">Contact Us</h3>
            <p className="flex items-center mb-4 text-sm font-averia">
              <FaMapMarkerAlt className="mr-2" /> 123 FruitMart 458336, Neemuch
              M.P. India
            </p>
            <p className="flex items-center mb-4 text-sm font-averia">
              <FaPhone className="mr-2" /> +91 123 456 7890
            </p>
            <p className="flex items-center mb-4 text-sm font-averia">
              <FaEnvelope className="mr-2" /> info@fruitmart.com
            </p>
          </div>
        </div>

        {/* Made with Love & Copyright */}
        <div className="mt-8 text-center">
          <p className="text-lg font-poppins">
            Made with{" "}
            <FaHeart
              className="inline text-red-500 hover:text-white"
              aria-label="love"
            />{" "}
            by{" "}
            <Link
              to="https://viramsingh.netlify.app/"
              target="_blank"
              className="hover:text-red-500"
            >
              Viram Singh
            </Link>
          </p>
          <p className="mt-2 text-sm font-averia">
            &copy; {new Date().getFullYear()} FruitMart. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
