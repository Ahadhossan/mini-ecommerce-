import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";
import CartSidebar from "./components/CartSidebar";
import CheckoutModal from "./components/CheckoutModal";
import { CartProvider } from "./components/CartContext";

function App() {
  const [showCart, setShowCart] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);

  return (
    <CartProvider>
      <Router>
        <div className="relative">
          <Navbar onCartClick={() => setShowCart(true)} />
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/product/:id" element={<ProductDetail />} />
          </Routes>
          <CartSidebar
            isOpen={showCart}
            onClose={() => setShowCart(false)}
            onCheckout={() => {
              setShowCart(false);
              setShowCheckout(true);
            }}
          />
          <CheckoutModal
            isOpen={showCheckout}
            onClose={() => setShowCheckout(false)}
          />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
