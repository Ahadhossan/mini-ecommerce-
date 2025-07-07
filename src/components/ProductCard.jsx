import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="border p-4 rounded shadow-lg">
      <Link to={`/product/${product.id}`}></Link>
    </div>
  );
};

export default ProductCard;
