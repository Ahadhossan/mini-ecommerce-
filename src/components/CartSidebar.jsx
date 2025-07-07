import React from "react";
import { useCart } from "./CartContext"; // Import the CartContext

const CartSidebar = ({ isOpen, onClose, onCheckout }) => {
  const { cart, removeFromCart, increment, decrement, total } = useCart();

  return (
    <div
      className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300 ease-in-out`}
    >
      {/* Header Section */}
      <div className="p-4 border-b flex justify-between items-center">
        <h2 className="font-bold text-lg">Your Cart</h2>
        <button
          onClick={onClose}
          className="text-xl text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>
      </div>

      {/* Cart Empty State */}
      {cart.length === 0 ? (
        <div className="text-center p-4 text-gray-500">
          <p>Your cart is empty.</p>
        </div>
      ) : (
        <div className="p-4 space-y-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="border p-4 rounded-lg shadow-sm hover:shadow-lg transition"
            >
              {/* Item Info */}
              <div className="flex justify-between text-gray-800">
                <div className="flex items-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-12 h-12 object-cover rounded-md mr-4"
                  />
                  <p>{item.title}</p>
                </div>
                <p className="font-semibold">${item.price * item.qty}</p>
              </div>

              {/* Quantity Controls */}
              <div className="flex items-center gap-3 mt-2">
                <button
                  onClick={() => decrement(item.id)}
                  className="w-8 h-8 bg-gray-200 text-gray-600 rounded-full flex items-center justify-center hover:bg-gray-300 transition"
                >
                  -
                </button>
                <span className="text-lg">{item.qty}</span>
                <button
                  onClick={() => increment(item.id)}
                  className="w-8 h-8 bg-gray-200 text-gray-600 rounded-full flex items-center justify-center hover:bg-gray-300 transition"
                >
                  +
                </button>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="ml-auto text-red-600 hover:text-red-800 transition"
                >
                  <i className="fa fa-trash"></i> Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Cart Total and Checkout */}
      {cart.length > 0 && (
        <div className="p-4 border-t">
          <p className="font-bold text-gray-800">Total: ${total}</p>
          <button
            onClick={onCheckout}
            className="mt-2 bg-blue-600 text-white w-full py-2 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
          >
            Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default CartSidebar;
