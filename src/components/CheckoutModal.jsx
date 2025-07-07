import React, { useState } from "react";

const CheckoutModal = ({ isOpen, onClose }) => {
  const [form, setForm] = useState({ name: "", email: "", address: "" });
  const [isSubmitting, setIsSubmitting] = useState(false); // To show a loading state

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate an API call or order placement
    setTimeout(() => {
      alert("Order placed successfully!");
      setIsSubmitting(false);
      onClose(); // Close the modal after submission
    }, 1500); // Simulate network delay
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md"
      >
        <h2 className="text-xl font-bold mb-4 text-center">Checkout</h2>

        {/* Name Field */}
        <input
          type="text"
          placeholder="Name"
          required
          className="w-full p-3 mb-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        {/* Email Field */}
        <input
          type="email"
          placeholder="Email"
          required
          className="w-full p-3 mb-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        {/* Address Field */}
        <textarea
          placeholder="Address"
          required
          className="w-full p-3 mb-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
          value={form.address}
          onChange={(e) => setForm({ ...form, address: e.target.value })}
        />

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-2 rounded bg-blue-600 text-white font-semibold ${
            isSubmitting ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-700"
          } transition duration-300`}
        >
          {isSubmitting ? "Processing..." : "Place Order"}
        </button>

        {/* Cancel Button */}
        <button
          type="button"
          onClick={onClose}
          className="w-full mt-3 text-center text-sm text-gray-500 hover:text-gray-700"
        >
          Cancel
        </button>
      </form>
    </div>
  );
};

export default CheckoutModal;
