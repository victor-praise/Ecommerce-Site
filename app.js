// variables
const cartBtn = document.querySelector(".cart-btn");
const closeCartBtn = document.querySelector(".close-cart");
const clearCartBtn = document.querySelector(".clear-cart");
const cartDOM = document.querySelector(".cart");
const cartOverlay = document.querySelector(".cart-overlay");
const cartItems = document.querySelector(".cart-items");
const cartTotal = document.querySelector(".cart-total");
const cartContent = document.querySelector(".cart-content");
const p_DOM = document.querySelector(".products-center");
const vendorsDOM = document.querySelector(".vendor-center");
// vendors list
let allVendors = {
  items: [
    {
      sys: { id: "1" },
      fields: {
        title: "KFC",
        image: { fields: { file: { url: "./images/kfclogo.jpg" } } },
        link: "kfc.html"
      }
    },
    {
      sys: { id: "2" },
      fields: {
        title: "Dominos",
        image: { fields: { file: { url: "./images/dominoslogo.jpg" } } },
        link: "dominos.html"
      }
    },
    {
      sys: { id: "3" },
      fields: {
        title: "cold stone",
        image: { fields: { file: { url: "./images/coldstone.jpg" } } },
        link: "coldstone.html"
      }
    }
  ]
};
// services list
let allServices = {
  items: [
    {
      sys: { id: "1" },
      fields: {
        title: "Appetizers",
        image: { fields: { file: { url: "./images/coffee_delight.jpeg" } } }
      }
    },
    {
      sys: { id: "2" },
      fields: {
        title: "Main Course",
        image: { fields: { file: { url: "./images/riceMeat.jpg" } } }
      }
    },
    {
      sys: { id: "3" },
      fields: {
        title: "dessert",
        image: {
          fields: {
            file: { url: "./images/bread.jpg" }
          }
        }
      }
    }
  ]
};
// dominos list

class Vendors {
  async getVendors() {
    try {
      let answer = await allVendors;
      let vendors = answer.items;
      vendors = vendors.map(item => {
        const { title } = item.fields;
        const { id } = item.sys;
        const image = item.fields.image.fields.file.url;
        const link = item.fields.link;
        return { title, id, image, link };
      });
      return vendors;
    } catch (error) {
      console.log(error);
    }
  }
}
// passing the services list to a class using an async function
class Services {
  async getServices() {
    try {
      let result = await allServices;
      let services = result.items;
      services = services.map(item => {
        const { title } = item.fields;
        const { id } = item.sys;
        const image = item.fields.image.fields.file.url;
        return { title, id, image };
      });
      return services;
    } catch (error) {
      console.log(error);
    }
  }
}

// creating the vendor ui
class VendorUI {
  displayVendors(vendor) {
    let result = "";
    vendor.forEach(vendor => {
      result += `<article class="product">
          <div class="img-container">
            <img
              src=${vendor.image}
              alt="product"
              class="product-img"
            />
            <a href=${vendor.link}><button class="bag-btn">Go There</button></a>
          </div>
          <h3>${vendor.title}</h3>
        </article>`;
    });
    vendorsDOM.innerHTML = result;
  }
}
// creating the services ui
class ServicesUI {
  displayServices(services) {
    let result = "";
    services.forEach(services => {
      result += `<article class="product">
          <div class="img-container">
            <img
              src=${services.image}
              alt="product"
              class="product-img"
            />
           <a href="vendors.html"> <button class="bag-btn">Go There</button></a>
          </div>
          <h3>${services.title}</h3>
        </article>`;
    });
    p_DOM.innerHTML = result;
  }
}

const vendorUi = new VendorUI();
const vendor = new Vendors();
const servicesUi = new ServicesUI();
const services = new Services();
vendor.getVendors().then(vendors => {
  vendorUi.displayVendors(vendors);
});
services.getServices().then(services => servicesUi.displayServices(services));
(function() {
  const cartInfo = document.querySelector(".cart-btn");
  const openCart = document.querySelector(".cart");
  const closeCart = document.querySelector(".close-cart");

  cartInfo.addEventListener("click", function() {
    openCart.classList.add("showCart");
  });
  closeCart.addEventListener("click", function() {
    openCart.classList.remove("showCart");
  });
})();
if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}
function ready() {
  const removeCartItemsButtons = document.getElementsByClassName("remove-item");
  for (let i = 0; i < removeCartItemsButtons.length; i++) {
    var button = removeCartItemsButtons[i];
    button.addEventListener("click", removeItems);
  }
  document
    .getElementsByClassName("clear-cart")[0]
    .addEventListener("click", clearCartClicked);
}
const closePopUp = document.querySelector(".close-pop-up");
closePopUp.addEventListener("click", function() {
  document.querySelector(".pop-up-content").style.display = "none";
});
document
  .getElementsByClassName("clear-cart2")[0]
  .addEventListener("click", function() {
    document.querySelector(".pop-up-content").style.display = "block";
    const openCart = document.querySelector(".cart");
    openCart.classList.remove("showCart");
    document.querySelector(".pop-up-content").style.display = "block";
    const infoSubmit = document
      .querySelector(".btn-pop-up")
      .addEventListener("click", function(e) {
        let address = document.querySelector(".address-value").value;
        let name = document.querySelector(".name-value").value;
        alert(document.getElementsByClassName("cart-total")[0].innerHTML);

        if (address === "" || name === "") {
          alert("order cannot be completed unless you input your details");
          e.preventDefault();
          return;
        } else {
          var cartItem = document.getElementsByClassName("cart-content")[0];
          while (cartItem.hasChildNodes()) {
            cartItem.removeChild(cartItem.firstChild);
          }
          updateCartTotals();
          updateCartNumbers();
        }
      });
    const addToCartButtons = document.getElementsByClassName("bag-btn");
    for (let i = 0; i < addToCartButtons.length; i++) {
      addToCartButton = addToCartButtons[i];
      addToCartButton.innerHTML = "Add to Cart";
      addToCartButton.disabled = false;
    }
  });
// clears the entire cart
function clearCartClicked() {
  var cartItem = document.getElementsByClassName("cart-content")[0];
  while (cartItem.hasChildNodes()) {
    cartItem.removeChild(cartItem.firstChild);
  }
  alert("cart cleared");
  updateCartTotals();
  updateCartNumbers();

  const addToCartButtons = document.getElementsByClassName("bag-btn");
  for (let i = 0; i < addToCartButtons.length; i++) {
    addToCartButton = addToCartButtons[i];
    addToCartButton.innerHTML = "Add to Cart";
    addToCartButton.disabled = false;
  }
}
// removes items in the cart

function removeItems() {
  var buttonClicked = event.target;
  buttonClicked.parentElement.parentElement.remove();
  updateCartTotals();
  updateCartNumbers();
  const addToCartButtons = document.getElementsByClassName("bag-btn");
  for (let i = 0; i < addToCartButtons.length; i++) {
    addToCartButton = addToCartButtons[i];
    addToCartButton.innerHTML = "Add to Cart";
    addToCartButton.disabled = false;
  }
}
// increases price as quantity changes
const quantityInput = document.getElementsByClassName("item-amount");
for (let i = 0; i < quantityInput.length; i++) {
  let input = quantityInput[i];
  input.addEventListener("change", quantityChanged);
}
// stops user from inputing negative and zero value
function quantityChanged(event) {
  var input = event.target;
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1;
  }
  updateCartTotals();
}
// adds item to cart
const addToCartButtons = document.getElementsByClassName("bag-btn");
for (let i = 0; i < addToCartButtons.length; i++) {
  let button = addToCartButtons[i];
  button.addEventListener("click", addToCartClicked);
}
function addToCartClicked(event) {
  button = event.target;
  let shopItem = button.parentElement;
  let title = shopItem.getElementsByClassName("title-product")[0].textContent;
  let priceNumber = parseFloat(
    shopItem.getElementsByClassName("price")[0].innerText.replace("$", "")
  );

  let imageSrc = shopItem.getElementsByClassName("product-img")[0].src;
  addItemToCart(title, priceNumber, imageSrc);
  updateCartTotals();
  updateCartNumbers();
}
// puts clicked item into the cart
function addItemToCart(title, priceNumber, imageSrc) {
  var cartItem = document.createElement("div");
  cartItem.classList.add("cart-item");
  var cartContent = document.getElementById("cart-content");
  var cartItemsNames = cartContent.getElementsByClassName("title-name");
  button.innerHTML = "inCart";
  for (let i = 0; i < cartItemsNames.length; i++) {
    if (cartItemsNames[i].innerHTML === title) {
      alert("Already in Cart");
      button.disabled = true;
      return;
    }
  }
  cartItem.innerHTML = ` 
              <img src="${imageSrc}" alt="burger" />
              <div>
                <h4 class="title-name">${title}</h4>
                <h5 class="amount">$${priceNumber}</h5>
                <button class="remove-item" type="button">Remove</button>
              </div>
              <div>
                <input class="item-amount" type="number" value="1" />
              </div>
            <!-- end of cart item -->`;
  var end = document.getElementsByClassName("cart-footer")[0];
  cartContent.append(cartItem);
  cartItem
    .getElementsByClassName("remove-item")[0]
    .addEventListener("click", removeItems);
  cartItem
    .getElementsByClassName("item-amount")[0]
    .addEventListener("change", quantityChanged);
}
// updates totals
function updateCartTotals() {
  var cartitemContainer = document.getElementsByClassName("cart-content")[0];
  var cartItems = cartitemContainer.getElementsByClassName("cart-item");
  var total = 0;
  for (let i = 0; i < cartItems.length; i++) {
    var cartItem = cartItems[i];
    var priceElement = cartItem.querySelector(".amount");
    var quantityElement = cartItem.getElementsByClassName("item-amount")[0];
    var price = parseFloat(priceElement.innerHTML.replace("$", ""));
    var quantity = quantityElement.value;
    total = total + price * quantity;
  }
  document.getElementsByClassName("cart-total")[0].innerText = total;
}
// updates item number
function updateCartNumbers() {
  let total = 0;
  const cartNumber = document.getElementsByClassName("cart-item");
  for (let i = 0; i < cartNumber.length; i++) {
    cartNumbers = cartNumber[i];
    total = total + 1;
  }
  document.getElementsByClassName("cart-items")[0].innerHTML = total;
}
