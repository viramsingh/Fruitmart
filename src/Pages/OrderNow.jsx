import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const OrderNow = ({ cart, setCart }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    paymentMethod: "Cash on Delivery",
  });

  // State to track order submission status
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.address) {
      toast.error("Please fill in all required fields.");
      return;
    }

    const loadingToast = toast.loading("Processing your order...");
    setTimeout(() => {
      toast.dismiss(loadingToast);
      toast.success("Order placed successfully!");
      setIsOrderPlaced(true); // Set order status to true
      setCart([]); // Clear the cart
    }, 2000);
  };

  const calculateTotalAmount = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/");
  };

  return (
    <div className="container px-4 py-8 mx-auto">
      <h2 className="mb-8 text-4xl font-bold text-center font-poppins text-primary">
        Order Now
      </h2>

      {isOrderPlaced ? (
        <div className="text-center flex flex-col items-center">
          <p className="text-lg font-semibold text-green-600">
            Thank you for purchasing our fruits! We will process your order
            shortly.
          </p>
          <button
            onClick={handleBackClick}
            className="text-center justify-center flex items-center bg-primary text-white px-4 py-2 rounded mt-4"
          >
            Back to Home
          </button>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto bg-white rounded-lg shadow-md p-6"
        >
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-primary focus:border-primary"
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-primary focus:border-primary"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Delivery Address
            </label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-primary focus:border-primary"
              placeholder="Enter your delivery address"
              rows="3"
              required
            ></textarea>
          </div>

          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Payment Method
            </label>
            <select
              name="paymentMethod"
              value={formData.paymentMethod}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-primary focus:border-primary"
            >
              <option value="Cash on Delivery">Cash on Delivery</option>
              <option value="Credit/Debit Card">Credit/Debit Card</option>
              <option value="UPI">UPI</option>
              <option value="Net Banking">Net Banking</option>
            </select>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-bold text-gray-800">
              Total Amount: ₹{calculateTotalAmount()}
            </h3>
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600"
          >
            Place Order
          </button>
        </form>
      )}
    </div>
  );
};

export default OrderNow;
