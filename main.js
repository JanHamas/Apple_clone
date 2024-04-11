// Show cart mega and search mega by clicking icon in header
var cartSearch = document.querySelector(".cart-search");
var searchIcon = document.querySelector(".cart-search .ri-search-line");
var cartIcon = document.querySelector(".cart-search .ri-shopping-bag-line");
searchIcon.addEventListener("click", function () {
  cartSearch.classList.toggle("search-active");
  cartSearch.classList.remove("cart-active");
  menuIcon.classList.remove("mobile-hide");
  closeIcon.classList.toggle("mobile-hide");
});
cartIcon.addEventListener("click", function () {
  cartSearch.classList.toggle("cart-active");
  cartSearch.classList.remove("search-active");
  menuIcon.classList.remove("mobile-hide");
  closeIcon.classList.toggle("mobile-hide");
});
// Autoclose mega by hover outside mega
cartSearch.addEventListener("mouseleave", function () {
  cartSearch.classList.remove("search-active");
  cartSearch.classList.remove("cart-active");
});
var menuIcon = document.querySelector(".desktop-hide .icon-menu");
var closeIcon = document.querySelector(".desktop-hide .icon-close");
menuIcon.addEventListener("click", function () {
  menuIcon.classList.toggle("mobile-hide");
  closeIcon.classList.remove("mobile-hide");
});
closeIcon.addEventListener("click", function () {
  menuIcon.classList.remove("mobile-hide");
  closeIcon.classList.toggle("mobile-hide");
  cartSearch.classList.remove("search-active");
  cartSearch.classList.remove("cart-active");
});
