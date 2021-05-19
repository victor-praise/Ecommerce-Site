const btns = [...document.querySelectorAll(".bag-btn")];
btns.forEach(function(btn) {
  btn.addEventListener("click", function(event) {
    let id = btn.dataset.id;
    console.log(id);
    // let fullPath = event.target.previousElementSibling.src;
    // let position = fullPath.indexOf("images") + 6;
    // let partialPath = fullPath.slice(position);
    // const items = {};
    // items.img = `images${partialPath}`;
    // let name = event.target.nextElementSibling.textContent;
    // items.name = name;
    // price = event.target.nextElementSibling.nextElementSibling.textContent;
    // price = price.slice(1).trim();
    // items.price = price;
    // const cartItem = document.createElement("div");
    // cartItem.classList.add("item-list");
    // cartItem.innerHTML = `
    //   <div class="cart-content">
    //     <div class="cart-item">
    //       <img src="${items.img}" alt="burger" />
    //       <div>
    //         <h4 >${items.name}</h4>
    //         <h5 class="amount">$${items.price}</h5>
    //         <span class="remove-item">remove</span>
    //       </div>
    //       <div>
    //          <input class="item-amount" type="number" value="2" />
    //       </div>`;
    // const cart = document.getElementById("cart");
    // const total = document.querySelector(".cart-footer");
    // cart.insertBefore(cartItem, total);
    // if (btn.dataset.id === id) {
    //   btn.innerText = "in cart";
    //   btn.disabled = true;
    // } else {
    //   alert("successfuly added");
    // }

    let removeItem = [...document.querySelectorAll(".remove-item")];
    removeItem.forEach(function(rem) {
      rem.addEventListener("click", function(event) {
        const remove = event.target.parentElement.parentElement;
        const price = parseFloat(
          event.target.previousElementSibling.textContent.replace("$", "")
        );
        console.log(price);
        let total = parseFloat(
          document.querySelector(".cart-total").textContent
        );
        const cartTotal = (document.querySelector(".cart-total").innerText =
          total - price);
        console.log(total);

        remove.remove();
      });
      function updateTotals() {
        let quantity = document.querySelector(".item-amount").value;
        let container = document.getElementsByClassName("img-container")[0];
        totalNumber = [...container.getElementsByClassName("price")];
        totalNumber.forEach(() => {
          console.log(totalNumber);
        });
        // let priceItem = parseFloat(totalMoney);
        console.log(totalNumber);

        // const cartTotal = (document.querySelector(
        //   ".cart-total"
        // ).innerText = totalMoney);
      }
    });
  });
});
// const priceItem = [];
function onLoadCartNumbers() {
  let productNumbers = localStorage.getItem("cartNumbers");
  if (productNumbers) {
    cartItems = document.querySelector(".cart-items");
    cartItems.innerHTML = productNumbers;
  }
}
function cartNumbers() {
  let productNumbers = localStorage.getItem("cartNumbers");
  productNumbers = parseInt(productNumbers);

  if (productNumbers) {
    localStorage.setItem("cartNumbers", productNumbers + 1);
    cartItem = document.querySelector(".cart-items");
    cartItem.innerHTML = productNumbers + 1;
  } else {
    localStorage.setItem("cartNumbers", 1);
    cartItem = document.querySelector(".cart-items");
    cartItem.innerHTML = 1;
  }
}
