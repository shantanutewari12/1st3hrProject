// AddProduct.js
function addProduct(products, setProducts, totalValue, setTotalValue, productId, productName, sellingPrice) {
    const newProduct = {
      id: productId,
      name: productName,
      price: parseFloat(sellingPrice),
    };
  
    setProducts([...products, newProduct]);
    setTotalValue(totalValue + newProduct.price);
  }
  
  export default addProduct;
  