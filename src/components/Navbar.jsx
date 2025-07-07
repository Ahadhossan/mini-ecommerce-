import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ onCartClick, cartItemCount }) => (
  <nav className="flex justify-between items-center p-4 bg-blue-600 text-white shadow-md">
    {/* Brand Name */}
    <Link
      to="/"
      className="text-2xl font-bold text-white hover:text-gray-200 transition duration-300"
    >
      MiniShop
    </Link>

    {/* Cart Button with Item Count */}
    <button
      onClick={onCartClick}
      className="relative bg-white text-blue-600 px-6 py-2 rounded hover:bg-gray-100 transition duration-300"
    >
      Cart
      {/* Display cart item count */}
      {cartItemCount > 0 && (
        <span className="absolute top-0 right-0 bg-red-600 text-white rounded-full text-xs px-2 py-1">
          {cartItemCount}
        </span>
      )}
    </button>
  </nav>
);

export default Navbar;
