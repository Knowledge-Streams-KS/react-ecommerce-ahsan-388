import React, { useState, useEffect } from "react";
import axios from "axios";

function Product() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
        setFilteredProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [products, searchTerm]);

  const handleSort = (type) => {
    let sortedProducts = [...filteredProducts];
    if (type === "ascPrice") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (type === "descPrice") {
      sortedProducts.sort((a, b) => b.price - a.price);
    } else if (type === "ascTitle") {
      sortedProducts.sort((a, b) => a.title.localeCompare(b.title));
    } else if (type === "descTitle") {
      sortedProducts.sort((a, b) => b.title.localeCompare(a.title));
    }
    setFilteredProducts(sortedProducts);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search products"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div>
        <button onClick={() => handleSort("ascPrice")}>
          Sort by Price (Low to High)
        </button>
        <button onClick={() => handleSort("descPrice")}>
          Sort by Price (High to Low)
        </button>
        <button onClick={() => handleSort("ascTitle")}>
          Sort by Title (A to Z)
        </button>
        <button onClick={() => handleSort("descTitle")}>
          Sort by Title (Z to A)
        </button>
      </div>
      <div>
        {filteredProducts.map((product) => (
          <div key={product.id}>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;
