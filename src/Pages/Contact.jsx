import React, { useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import toast from "react-hot-toast";

const ContactUs = () => {
  const [val, setVal] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVal((preVal) => ({
      ...preVal,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(val);

    setTimeout(() => {
      toast.success("Your message has been successfully sent");
    }, 2000);

    setVal({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="container px-4 mx-auto">
        <h2 className="mb-8 text-4xl font-bold text-center font-poppins text-primary">
          Contact Us
        </h2>
        <div className="flex flex-col justify-between lg:flex-row">
          {/* Contact Form */}
          <div className="p-8 bg-white rounded-lg shadow-lg lg:w-2/3">
            <form onSubmit={handleFormSubmit}>
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-gray-700"
                >
                  Your Name
                </label>
                <input
                  value={val.name}
                  onChange={handleChange}
                  type="text"
                  id="name"
                  name="name"
                  className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-700"
                >
                  Your Email
                </label>
                <input
                  value={val.email}
                  onChange={handleChange}
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="subject"
                  className="block text-sm font-semibold text-gray-700"
                >
                  Subject
                </label>
                <input
                  value={val.subject}
                  onChange={handleChange}
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                  placeholder="Enter subject"
                  required
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-gray-700"
                >
                  Your Message
                </label>
                <textarea
                  value={val.message}
                  onChange={handleChange}
                  id="message"
                  name="message"
                  rows="5"
                  className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                  placeholder="Enter your message"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="px-6 py-2 font-semibold text-white transition-colors duration-300 rounded-lg shadow-md bg-primary hover:bg-secondary"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="mt-12 lg:w-1/3 lg:mt-0 lg:pl-8">
            <div className="p-8 mb-8 bg-white rounded-lg shadow-lg">
              <h3 className="mb-4 text-2xl font-bold text-primary font-poppins">
                Get in Touch
              </h3>
              <p className="mb-6 text-gray-700 font-averia">
                Have a question? We'd love to hear from you! Reach out to us
                through any of the methods below, and we’ll get back to you as
                soon as possible.
              </p>
              <p className="mb-2 text-gray-700 font-averia">
                <strong>Email:</strong> support@fruitmart.com
              </p>
              <p className="mb-2 text-gray-700 font-averia">
                <strong>Phone:</strong> +91 123 456 7890
              </p>
              <p className="text-gray-700 font-averia">
                <strong>Address:</strong> 123 FruitMart Lane, Fresh City, FC
                12345
              </p>
            </div>

            <div className="p-8 bg-white rounded-lg shadow-lg">
              <h3 className="mb-4 text-2xl font-bold text-primary font-poppins">
                Follow Us
              </h3>
              <p className="mb-6 text-gray-700 font-averia">
                Stay connected with us on social media for the latest updates
                and promotions!
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl text-gray-600 hover:text-secondary"
                >
                  <FaFacebook />
                </a>
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl text-gray-600 hover:text-secondary"
                >
                  <FaTwitter />
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl text-gray-600 hover:text-secondary"
                >
                  <FaInstagramSquare />
                </a>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl text-gray-600 hover:text-secondary"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
