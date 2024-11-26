import React from "react";
import ".././Styles/ProductCard.css";


const ProductCard = ({ product, onToggleFavorite, onToggleExpand }) => {
  return (
    <div className={`product-card ${product.isFavorite ? "favorited" : ""}`}>
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.price}</p>
      <p>{product.description}</p>
      <button onClick={() => onToggleFavorite(product.id)}>
        {product.isFavorite ? "❤️ Favorited" : "♡ Favorite"}
      </button>
      <button onClick={() => onToggleExpand(product.id)}>
        {product.isExpanded ? "Hide Features" : "Show Features"}
      </button>
      {product.isExpanded && (
        <ul className="features">
          {product.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProductCard;
