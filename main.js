// show  search and cart mega onclick
const cartSearch = document.querySelector(".cart-search");
const search = document.querySelector(".ri-search-line");
const cart = document.querySelector(".ri-shopping-bag-line");
search.addEventListener("click", function () {
  cartSearch.classList.toggle("show-search");
  cartSearch.classList.remove("show-cart");
});
cart.addEventListener("click", function () {
  cartSearch.classList.toggle("show-cart");
  cartSearch.classList.remove("show-search");
});

// autoclose by click outside cartSearch
window.addEventListener("click", function (event) {
  if (!cartSearch.contains(event.target)) {
    cartSearch.classList.remove("show-cart");
    cartSearch.classList.remove("show-search");
  }
});
// autoclose by hover outside on cartSearch
cartSearch.addEventListener("mouseleave", function () {
  cartSearch.classList.remove("show-cart");
  cartSearch.classList.remove("show-search");
});
// copy navbar to mobile-header
const navBar = document.querySelector("nav .navbar");
const mobileHeader = document.querySelector("header .mobile-header");
mobileHeader.innerHTML = navBar.innerHTML;
// show on click mobile-header and close icon menu and show close
document.addEventListener("DOMContentLoaded", function () {
  const mobileHeader = document.querySelector(".mobile-header");
  const menuButton = document.querySelector(".cart-search .trigger");
  const closeIcon = document.querySelector(".cart-search .close");
  menuButton.addEventListener("click", function () {
    mobileHeader.classList.toggle("show-header");
    closeIcon.classList.toggle("show-close");
    menuButton.classList.toggle("trigger-close");
  });
  closeIcon.addEventListener("click", function () {
    mobileHeader.classList.remove("show-header");
    closeIcon.classList.remove("show-close");
    menuButton.classList.remove("trigger-close");
  });
});
var mega = document.querySelectorAll(".has-child span");
mega.forEach((menu) => menu.addEventListener("click", toggle));

function toggle(e) {
  e.preventDefault();
  var parent = this.closest(".has-child");
  var isExpanded = parent.classList.contains("expand");

  // Close all other expanded items
  var expandedItems = document.querySelectorAll(".has-child.expand");
  expandedItems.forEach((item) => {
    if (item !== parent) {
      item.classList.remove("expand");
    }
  });

  // Toggle expand state for clicked item
  parent.classList.toggle("expand", !isExpanded);
}

//click on back-button close mega
var backButton = document.querySelectorAll(".back-button");
backButton.forEach(button => {
  button.addEventListener("click", function () {
    var parent = this.closest(".has-child");
    parent.classList.remove("expand");
  });
});

