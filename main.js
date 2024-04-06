// Show cart mega and search mega by clicking icon in header
var cartSearch = document.querySelector(".cart-search");
var searchIcon = document.querySelector(".cart-search .ri-search-line");
var cartIcon = document.querySelector(".cart-search .ri-shopping-bag-line");
searchIcon.addEventListener("click", function () {
  cartSearch.classList.toggle("search-active");
  cartSearch.classList.remove("cart-active");
});
cartIcon.addEventListener("click", function () {
  cartSearch.classList.toggle("cart-active");
  cartSearch.classList.remove("search-active");
});
// Autoclose mega by hover and click outside mega




