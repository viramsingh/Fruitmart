import React from "react";

// import Images
import AppleIMG from "../../assets/FeaturedImages/apple.jpg";
import BananasIMG from "../../assets/FeaturedImages/banana.jpg";
import StrawberriesIMG from "../../assets/FeaturedImages/strawberries.jpg";
import MangoesIMG from "../../assets/FeaturedImages/mangoes.jpg";
import OrangesIMG from "../../assets/FeaturedImages/oranges.jpg";
import BlueberriesIMG from "../../assets/FeaturedImages/blueberries.jpg";
import { Link } from "react-router-dom";

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: "Fresh Apples",
      description: "Juicy and crisp apples sourced from local farms.",
      image: AppleIMG,
      link: "/shop",
    },
    {
      id: 2,
      name: "Organic Bananas",
      description: "Sweet and ripe bananas perfect for a healthy snack.",
      image: BananasIMG,
      link: "/shop",
    },
    {
      id: 3,
      name: "Ripe Strawberries",
      description: "Freshly picked strawberries with a sweet and tangy flavor.",
      image: StrawberriesIMG,
      link: "/shop",
    },
    {
      id: 4,
      name: "Tropical Mangoes",
      description: "Succulent mangoes with a rich, sweet taste.",
      image: MangoesIMG,
      link: "/shop",
    },
    {
      id: 5,
      name: "Citrus Oranges",
      description: "Zesty and refreshing oranges full of vitamin C.",
      image: OrangesIMG,
      link: "/shop",
    },
    {
      id: 6,
      name: "Fresh Blueberries",
      description: "Plump and juicy blueberries, perfect for snacking.",
      image: BlueberriesIMG,
      link: "/shop",
    },
  ];

  return (
    <section className="py-12 bg-gray-100">
      <div className="container px-4 mx-auto">
        <h2 className="mb-8 text-3xl font-bold text-center font-poppins">
          Featured Fruits
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.id}
              className="overflow-hidden bg-white rounded-lg shadow-lg"
            >
              <img
                src={product.image}
                alt={product.name}
                className="object-cover w-full h-48"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold font-poppins">
                  {product.name}
                </h3>
                <p className="text-gray-600 font-averia">
                  {product.description}
                </p>
                <Link
                  to="/shop"
                  className="inline-block px-4 py-2 mt-4 font-semibold text-white transition rounded-lg bg-primary hover:bg-secondary"
                >
                  Shop Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
