function attachAddToCart() {
  /* Add your add to cart logic here */

  // Element Selectors
  const addButton = Array.from(
    document.querySelectorAll(".add-to-cart-button")
  );
  const shoppingCart = document.getElementById("cart-size");
  let qty = 0;

  // Event Listeners
  addButton.forEach((button) => {
    button.addEventListener("click", function () {
      button.textContent = "Added to Cart";
      button.classList.add(".selected-btn");
      qty++;
      shoppingCart.textContent = qty;
    });
  });
}
