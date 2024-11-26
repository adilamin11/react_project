import React, { useState } from "react";
import ProductList from "./Components/ProductList";
import ".././src/Styles/App.css";

const App = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Product 1",
      price: "$100",
      image: "https://via.placeholder.com/150",
      description: "This is the first product.",
      features: ["Feature 1", "Feature 2", "Feature 3"],
      isFavorite: false,
      isExpanded: false,
    },
    {
      id: 2,
      name: "Product 2",
      price: "$200",
      image: "https://via.placeholder.com/150",
      description: "This is the second product.",
      features: ["Feature A", "Feature B", "Feature C"],
      isFavorite: false,
      isExpanded: false,
    },
  ]);

  const toggleFavorite = (id) => {
    setProducts((prev) =>
      prev.map((product) =>
        product.id === id ? { ...product, isFavorite: !product.isFavorite } : product
      )
    );
  };

  const toggleExpand = (id) => {
    setProducts((prev) =>
      prev.map((product) =>
        product.id === id ? { ...product, isExpanded: !product.isExpanded } : product
      )
    );
  };

  const clearFavorites = () => {
    setProducts((prev) =>
      prev.map((product) => ({ ...product, isFavorite: false }))
    );
  };

  return (
    <div className="app">
      <h1>Product Showcase</h1>
      <button onClick={clearFavorites} className="clear-favorites">
        Clear Favorites
      </button>
      <ProductList
        products={products}
        onToggleFavorite={toggleFavorite}
        onToggleExpand={toggleExpand}
      />
    </div>
  );
};

export default App;
