import React from "react";
import Products from "../../data/FeaturesData";
import { Link } from "react-router-dom";
import Loading from "../Loading";

const FeaturedProducts = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container px-4 mx-auto">
        <h2 className="mb-8 text-3xl font-bold text-center font-poppins">
          Featured Fruits
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {Products ? (
            Products.map((product) => (
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
            ))
          ) : (
            <Loading />
          )}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
