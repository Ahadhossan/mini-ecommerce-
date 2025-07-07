import React from "react";
import { Link } from "react-router-dom";
import products from "../data/products"; // Ensure products are imported
import { useCart } from "./CartContext"; // Importing the CartContext to manage cart actions

const ProductList = () => {
  const { addToCart } = useCart(); // Using useCart hook to get addToCart function

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-10 bg-[#FCFCFC]">
      {products.map((product) => (
        <div
          key={product.id}
          className="border p-4 shadow-lg hover:shadow-2xl bg-white rounded-lg transition duration-300 ease-in-out"
        >
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-48 object-cover rounded-md"
          />
          <h3 className="text-xl font-semibold mt-2 text-[#151517]">
            {product.title}
          </h3>
          <p className="text-gray-700 mt-2">{product.description}</p>
          <p className="text-lg font-bold text-[#151517] mt-2">
            ${product.price}
          </p>

          {/* Add to Cart Button */}
          <div className="mt-4 flex justify-between items-center">
            <button
              onClick={() => addToCart(product)} // Add the product to the cart
              className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
            >
              Add to Cart
            </button>
            <Link
              to={`/product/${product.id}`}
              className="text-blue-600 hover:text-blue-800 mt-2 inline-block text-sm"
            >
              View Details
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
