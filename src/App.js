import React, { useState, useEffect } from 'react';
import Input from './Components/Input';
import addProduct from './Components/AddProduct';
import deleteProduct from './Components/DeleteProduct';
import { saveProductsToLocal, getProductsFromLocal } from './Components/Storage';

function App() {
  const [productId, setProductId] = useState('');
  const [sellingPrice, setSellingPrice] = useState('');
  const [productName, setProductName] = useState('');
  const [products, setProducts] = useState(getProductsFromLocal());
  const [totalValue, setTotalValue] = useState(0);

  useEffect(() => {
    // Update local storage whenever products change
    saveProductsToLocal(products);
  }, [products]);

  const clearInputFields = () => {
    setProductId('');
    setSellingPrice('');
    setProductName('');
  };

  return (
    <div>
      <h1>Product Management App</h1>
      <div className="input-container">
        <div className="input-row">
          <label htmlFor="productId">Product ID:</label>
          <input
            id="productId"
            type="number"
            placeholder="Enter Product ID"
            value={productId}
            onChange={(e) => setProductId(e.target.value)}
          />
        </div>
        <div className="input-row">
          <label htmlFor="sellingPrice">Selling Price:</label>
          <input
            id="sellingPrice"
            type="number"
            placeholder="Enter Selling Price"
            value={sellingPrice}
            onChange={(e) => setSellingPrice(e.target.value)}
          />
        </div>
        <div className="input-row">
          <label htmlFor="productName">Product Name:</label>
          <input
            id="productName"
            type="text"
            placeholder="Enter Product Name"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
        </div>
        <button
          onClick={() => {
            addProduct(products, setProducts, totalValue, setTotalValue, productId, productName, sellingPrice);
            clearInputFields(); // Clear input fields after adding
          }}
        >
          Add Product
        </button>
      </div>
      <div>
        <h1>Products</h1>
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              ₹{product.price} - {product.name} 
              <button
                onClick={() => {
                  deleteProduct(products, setProducts, totalValue, setTotalValue, product.id, product.price);
                }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
        <div>
          <h3>Total Value Worth of Products: {totalValue}₹</h3>
        </div>
      </div>
    </div>
  );
}

export default App;
