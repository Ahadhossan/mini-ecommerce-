import React from "react";
import { useParams, Link } from "react-router-dom";
import products from "../data/products"; // Ensure products are imported from the correct file
import { useCart } from "./CartContext"; // Import the CartContext

const ProductDetail = () => {
  const { id } = useParams(); // Get the product ID from the URL
  const product = products.find((p) => p.id === parseInt(id)); // Find the product based on ID
  const { addToCart } = useCart(); // Get addToCart function from CartContext

  // If the product doesn't exist, show a "Product not found" message
  if (!product)
    return <p className="text-center text-gray-500">Product not found.</p>;

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg max-w-3xl mx-auto overflow-hidden">
      <div className="flex flex-col md:flex-row items-center md:items-start">
        {/* Product Image */}
        <img
          src={product.image}
          alt={product.title}
          className="w-full max-w-md mx-auto md:mr-6 rounded-lg shadow-md mb-6 md:mb-0"
        />

        <div className="md:w-1/2 flex flex-col justify-between">
          {/* Product Title */}
          <h2 className="text-3xl font-semibold text-gray-800 mt-4 md:mt-0">
            {product.title}
          </h2>

          {/* Product Description */}
          <p className="text-gray-600 mt-2">{product.description}</p>

          {/* Product Price */}
          <p className="text-xl font-semibold mt-4 text-blue-700">
            ${product.price}
          </p>

          {/* Additional Product Information */}
          <div className="mt-6">
            <h3 className="text-lg font-medium text-gray-800">
              Product Details:
            </h3>
            <ul className="list-disc pl-5 mt-2 text-gray-700">
              <li>Material: {product.material || "Cotton"}</li>
              <li>Size: {product.size || "M, L, XL"}</li>
              <li>Color: {product.color || "Red"}</li>
            </ul>
          </div>

          {/* Add to Cart Button */}
          <div className="mt-6">
            <button
              onClick={() => addToCart(product)}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
            >
              Add to Cart
            </button>
          </div>

          {/* Back to Home Button */}
          <Link to="/" className="mt-4 text-blue-600 hover:text-blue-800">
            &larr; Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
