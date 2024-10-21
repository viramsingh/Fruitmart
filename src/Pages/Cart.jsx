import React from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Cart = ({ cart, setCart }) => {
  const cartItems = cart || [];

  const handleQuantityChange = (index, delta) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart];
      const newQuantity = updatedCart[index].quantity + delta;

      if (newQuantity > 10) {
        toast.error("You can only purchase up to 10 items.");
        return prevCart;
      }

      updatedCart[index] = {
        ...updatedCart[index],
        quantity: Math.max(1, newQuantity),
      };
      return updatedCart;
    });
  };

  const handleRemoveItem = (index) => {
    setCart((prevCart) => prevCart.filter((_, i) => i !== index));
    toast.error("Item removed from cart");
  };

  const navigate = useNavigate();
  const handleOrderNow = () => {
    // toast.success("Order placed successfully!");
    navigate("/order-now");
  };

  const calculateTotalPrice = (item) => {
    return item.price * item.quantity;
  };

  return (
    <div className="container px-4 py-8 mx-auto">
      <h2 className="mb-8 text-4xl font-bold text-center font-poppins text-primary">
        Cart
      </h2>
      {cartItems.length === 0 ? (
        <p className="text-center">Your cart is empty.</p>
      ) : (
        <>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {cartItems.map((item, index) => (
              <div
                key={index}
                className="overflow-hidden transition-shadow duration-300 bg-white rounded-lg shadow-lg hover:shadow-2xl"
              >
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="object-cover w-full h-56"
                />
                <div className="p-4">
                  <h2 className="mb-2 text-xl font-semibold text-gray-800">
                    {item.name}
                  </h2>
                  <p className="text-gray-500">{item.description}</p>
                  <p className="mt-4 font-semibold text-gray-800">
                    Price: ₹{item.price} x {item.quantity} = ₹
                    {calculateTotalPrice(item)}
                  </p>
                  <div className="flex items-center mt-4 space-x-2">
                    <button
                      onClick={() => handleQuantityChange(index, -1)}
                      className="px-3 py-2 text-white bg-secondary rounded hover:bg-primary disabled:opacity-50"
                      disabled={item.quantity <= 1}
                    >
                      -
                    </button>
                    <span className="px-4 py-2 border rounded">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => handleQuantityChange(index, 1)}
                      className="px-3 py-2 text-white bg-secondary rounded hover:bg-primary disabled:opacity-50"
                      disabled={item.quantity >= 10}
                    >
                      +
                    </button>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <button
                      onClick={() => handleRemoveItem(index)}
                      className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600"
                    >
                      Remove
                    </button>
                    <button
                      onClick={handleOrderNow}
                      className="px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600"
                    >
                      Order Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {cartItems.length > 9 && (
            <div className="flex items-center justify-center w-full h-48 bg-white rounded-lg shadow-md">
              <p className="text-xl font-semibold">
                +{cartItems.length - 9} more items
              </p>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Cart;
