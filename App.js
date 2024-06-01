import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://20.244.56.144/test/companies/AMZ/categories/Laptop/products/top-10?minPrice=1&maxPrice=10000');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Top Products</h1>
      <ul>
        {products.map(product => (
          <li key={product.productName}>
            <div>Name: {product.productName}</div>
            <div>Price: {product.price}</div>
            <div>Rating: {product.rating}</div>
            <div>Discount: {product.discount}</div>
            <div>Availability: {product.availability}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
