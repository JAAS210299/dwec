(function () {
  const cartInfo = document.querySelector("div#cart-info");
  const cart = document.querySelector("div#cart");

  cartInfo.addEventListener("click", function () {
    cart.classList.toggle("show-cart");
  });
})();

(function () {
  const cartBtn = document.querySelectorAll(".store-item-icon");

  cartBtn.forEach(function (btn) {
    btn.addEventListener("click", function (event) {
      console.log(event.target);

      if (event.target.parentElement.classList.contains("store-item-icon")) {
        let fullPath = event.target.parentElement.previousElementSibling.src;
        let pos = fullPath.indexOf("img") + 3;
        let partPath = fullPath.slice(pos);

        const item = {};
        item.img = `img-cart${partPath}`;
        let name =
          event.target.parentElement.parentElement.nextElementSibling
            .children[0].children[0].textContent;
        item.name = name;
        let price =
          event.target.parentElement.parentElement.nextElementSibling
            .children[0].children[1].textContent;

        let finalPrice = price.slice(1).trim();
        item.price = finalPrice;
        console.log(finalPrice);
        // console.log(name);
        // console.log(item);

        const cartItem = document.createElement("div");
        cartItem.classList.add(
          "cart-item",
          "d-flex",
          "justify-content-between",
          "text-capitalize",
          "my-3"
        );

        cartItem.innerHTML = `
    <img src="${item.img}" class="img-fluid rounded-circle" id="item-img" alt="">
    <div class="item-text">
        <p id="cart-item-title" class="font-weight-bold mb-0">${item.name}</p>
        <span>$</span>
        <span id="cart-item-price" class="cart-item-price mb-0">${item.price}</span>
    </div>
    <a href="#" id="cart-item">
        <i class="fas fa-trash"></i>
    </a>
`;
// select cart
const cart = document.getElementById("cart");
const total = document.querySelector(".cart-total-container");

cart.insertBefore(cartItem, total);
alert("item added to the cart");
showTotals();

      }
    });
  });
  // show totals
function showTotals() {
    const total = [];
    const items = document.querySelectorAll(".cart-item-price");

    items.forEach(function(item) {
        total.push(parseFloat(item.textContent));
    });
    // console.log(total);

    const totalMoney = total.reduce(function(total, item) {
        total += item;
        return total;
    }, 0);
    const finalMoney = totalMoney.toFixed(2);

    document.getElementById("cart-total").textContent = finalMoney;
    document.querySelector(".item-total").textContent = finalMoney;
    document.getElementById("item-count").textContent = total.length;
}

})();

(function () {
    // Funcionalidad para borrar un ítem individual
    const cart = document.querySelector("#cart");
  
    cart.addEventListener("click", function (event) {
      if (event.target.classList.contains("fa-trash")) {
        const cartItem = event.target.closest(".cart-item");
        cartItem.remove();
        updateTotals();
      }
    });
  
    // Funcionalidad para borrar todos los ítems
    const clearCartBtn = document.querySelector("#clear-cart");
  
    clearCartBtn.addEventListener("click", function () {
      const cartItems = document.querySelectorAll(".cart-item");
      cartItems.forEach(function (item) {
        item.remove();
      });
      updateTotals();
    });
  
    // Actualizar totales del carrito
    function updateTotals() {
      const total = [];
      const items = document.querySelectorAll(".cart-item-price");
  
      items.forEach(function (item) {
        total.push(parseFloat(item.textContent));
      });
  
      const totalMoney = total.reduce(function (total, item) {
        total += item;
        return total;
      }, 0);
  
      const finalMoney = totalMoney.toFixed(2);
      document.getElementById("cart-total").textContent = finalMoney;
      document.querySelector(".item-total").textContent = finalMoney;
      document.getElementById("item-count").textContent = total.length;
    }
  })();
  
