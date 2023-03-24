function attachAddToCart() {
  /* Add your add to cart logic here */
  let cart = [];

  // Element Selectors
  const addButton = Array.from(
    document.querySelectorAll(".add-to-cart-button")
  );
  const shoppingCart = document.getElementById("cart-size");
  let cartQty = 0;

  // Event Listeners
  addButton.forEach((button) => {
    button.addEventListener("click", function () {
      button.textContent = "Added to Cart";
      cartQty++;
      shoppingCart.textContent = cartQty;
    });
  });
}
