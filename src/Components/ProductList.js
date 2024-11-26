import React from "react";
import ProductCard from "../Components/ProductCard";

const ProductList = ({ products, onToggleFavorite, onToggleExpand }) => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onToggleFavorite={onToggleFavorite}
          onToggleExpand={onToggleExpand}
        />
      ))}
    </div>
  );
};

export default ProductList;
