// DeleteProduct.js
function deleteProduct(products, setProducts, totalValue, setTotalValue, id, price) {
    const updatedProducts = products.filter(product => product.id !== id);
    setProducts(updatedProducts);
    setTotalValue(totalValue - price);
  }
  
  export default deleteProduct;
  