import React from "react";
import fruits from "../data/fruits";
import SearchBar from "../components/SearchBar/SearchBar";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Shop = ({ cart, setCart }) => {
  const [search, setSearch] = useState("");
  const [filteredFruits, setFilteredFruits] = useState(fruits);
  const [currentPage, setCurrentPage] = useState(1);
  const fruitsPerPage = 9;

  useEffect(() => {
    const filtered = fruits.filter((fruit) =>
      fruit.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredFruits(filtered);
  }, [search]);

  // const handleOnClick = (e, fruit) => {
  //   e.preventDefault();
  //   setCart((prevCart) => [...prevCart, fruit]);
  //   // toast.error(`${fruit.name} Added to Cart`);
  //   // toast.custom(customToast());
  //   const loadingtoast = () => {
  //     const loadingToast = toast.loading("Waiting...");
  //     setTimeout(() => {
  //       toast.dismiss(loadingToast);
  //       toast.success(`${fruit.name} added in cart`);
  //     }, 1000);
  //   };
  //   loadingtoast();
  //   // toast.success(`${fruit.name} Added to Cart`);
  //   // toast.custom(loadingtoast());
  //   // `${fruit.name} Added to Cart`;
  // };

  // const customToast = () => {
  //   return <div className="bg-red-600">Viram Singh</div>;
  // };

  const handleOnClick = (e, fruit) => {
    e.preventDefault();
    setCart((prevCart) => {
      const existingItemIndex = prevCart.findIndex(
        (item) => item.id === fruit.id
      );
      if (existingItemIndex !== -1) {
        toast.error(`${fruit.name} is already in your cart.`);
        return prevCart;
      } else {
        const loadingtoast = () => {
          const loadingToast = toast.loading("Waiting...");
          setTimeout(() => {
            toast.dismiss(loadingToast);
            toast.success(`${fruit.name} added to cart`);
          }, 1000);
        };
        loadingtoast();
        return [...prevCart, { ...fruit, quantity: 1 }];
      }
    });
  };

  const totalPages = Math.ceil(filteredFruits.length / fruitsPerPage);

  const currentFruits = filteredFruits.slice(
    (currentPage - 1) * fruitsPerPage,
    currentPage * fruitsPerPage
  );

  // Pagination handlers
  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const navigate = useNavigate();

  const handleImageClick = (id) => {
    const loadingtoast = () => {
      setTimeout(() => {});
      const loadingToast = toast.loading("Please wait, redirecting...");
      setTimeout(() => {
        toast.dismiss(loadingToast);
        toast.success("Successfully redirected");
      }, 1000);
    };
    loadingtoast();

    setTimeout(() => {
      navigate(`/fruiteDeatails/${id}`);
    }, 1000);
  };

  return (
    <div className="container px-4 py-8 mx-auto">
      <h2 className="mb-8 text-4xl font-bold text-center font-poppins text-primary">
        Welcome to the Fruit Shop
      </h2>

      <SearchBar search={search} setSearch={setSearch} />

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {currentFruits.length > 0 ? (
          currentFruits.map((fruit) => (
            <div
              onClick={() => handlefruitClick(fruit.id)}
              key={fruit.id}
              className="overflow-hidden transition-shadow duration-300 bg-white rounded-lg shadow-md hover:shadow-lg"
            >
              <div>
                <img
                  onClick={() => handleImageClick(fruit.id)}
                  src={fruit.imageUrl}
                  alt={fruit.name}
                  className="object-fill w-full h-48"
                />
              </div>
              <div className="p-4">
                <h2 className="mb-2 text-xl font-semibold">{fruit.name}</h2>
                <p className="text-gray-600">{fruit.description}</p>
                <p className="mt-4 font-bold text-gray-800">
                  Price: ₹{fruit.price}
                </p>
                <button
                  onClick={(e) => handleOnClick(e, fruit)}
                  className="w-full px-4 py-2 mt-2 text-white bg-red-500 rounded lg:w-full hover:bg-red-600"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="col-span-3 text-center text-gray-500">
            No fruits found
          </p>
        )}
      </div>

      {/* Pagination controls */}
      <div className="flex justify-center mt-8">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className="px-4 py-2 mr-2 text-white rounded-md bg-primary disabled:bg-gray-300"
        >
          Previous
        </button>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="px-4 py-2 ml-2 text-white rounded-md bg-primary disabled:bg-gray-300"
        >
          Next
        </button>
      </div>

      {/* Pagination info */}
      <p className="mt-4 text-center">
        Page {currentPage} of {totalPages}
      </p>
    </div>
  );
};

export default Shop;
