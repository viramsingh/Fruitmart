import React from "react";
import toast from "react-hot-toast";

const Cart = ({ cart, setCart }) => {
  const cartItems = cart || [];

  // Handler to change the quantity of an item
  const handleQuantityChange = (index, delta) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart];
      const newQuantity = Math.max(0, updatedCart[index].quantity + delta);
      updatedCart[index] = { ...updatedCart[index], quantity: newQuantity };
      return updatedCart;
    });
  };

  // Handler to remove an item from the cart
  const handleRemoveItem = (index, fruit) => {
    setCart((prevCart) => prevCart.filter((_, i) => i !== index));
    toast.error(`remove from cart`);
  };

  // Placeholder for the order functionality
  const handleOrderNow = (fruit) => {
    toast.success(`Order placed!`); // Replace with actual order processing logic
  };

  // Show either the item details or a message if the cart is empty
  return (
    <div className="container px-4 py-8 mx-auto">
      <h2 className="mb-8 text-4xl font-bold text-center font-poppins text-primary">
        Cart
      </h2>
      {cartItems.length === 0 ? (
        <p className="text-center">Your cart is empty.</p>
      ) : (
        <>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            {cartItems.slice(0, 9).map((item, index) => (
              <div
                key={index}
                className="overflow-hidden transition-shadow duration-300 bg-white rounded-lg shadow-md hover:shadow-lg"
              >
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="object-fill w-full h-48"
                />
                <div className="p-4">
                  <h2 className="mb-2 text-xl font-semibold">{item.name}</h2>
                  <p className="text-gray-600">{item.description}</p>
                  <p className="mt-4 font-bold text-gray-800">
                    Price: ₹{item.price}
                  </p>
                  <div className="flex items-center mt-4">
                    {/*   <button
                      onClick={() => handleQuantityChange(index, -1)}
                      className="px-2 py-1 bg-gray-300 rounded"
                      disabled={item.quantity <= 1}
                    >
                      -
                    </button>
                    <span className="mx-4">{item.quantity || 1}</span>
                    <button
                      onClick={() => handleQuantityChange(index, 1)}
                      className="px-2 py-1 bg-gray-300 rounded"
                    >
                      +
                    </button>  */}
                    <div className="flex justify-center gap-4">
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
              </div>
            ))}
            {cartItems.length > 9 && (
              <div className="flex items-center justify-center w-full h-48 bg-white rounded-lg shadow-md">
                <p className="text-xl font-semibold">
                  +{cartItems.length - 9} more
                </p>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
