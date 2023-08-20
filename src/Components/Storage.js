// Storage.js
function saveProductsToLocal(products) {
    localStorage.setItem('products', JSON.stringify(products));
  }
  
  function getProductsFromLocal() {
    const savedProducts = JSON.parse(localStorage.getItem('products'));
    return savedProducts || [];
  }
  
  export { saveProductsToLocal, getProductsFromLocal };
  