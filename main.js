// define all variables
var cartSearch = document.querySelector(".cart-search");
var searchIcon = document.querySelector(".cart-search .ri-search-line");
var cartIcon = document.querySelector(".cart-search .ri-shopping-bag-line");
var mobHeader = document.querySelector(".mobile-header");
// show mega on click search and cart icon in desktop header
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
// Close mega by hover outside mega
cartSearch.addEventListener("mouseleave", function () {
  cartSearch.classList.remove("search-active");
  cartSearch.classList.remove("cart-active");
});

// show and hide menu and close icon on click
var menuIcon = document.querySelector(".desktop-hide .icon-menu");
var megaBackIcon = document.querySelector(".logo .mega-back-icon");
var logo = document.querySelector(".apple");
menuIcon.addEventListener("click", function () {
  menuIcon.classList.toggle("mobile-hide");
  closeIcon.classList.remove("mobile-hide");
  // show mobile header on click of icon-menu
  mobHeader.classList.toggle("active");
});
var closeIcon = document.querySelector(".desktop-hide .icon-close");
closeIcon.addEventListener("click", function () {
  menuIcon.classList.remove("mobile-hide");
  closeIcon.classList.toggle("mobile-hide");
  cartSearch.classList.remove("search-active");
  cartSearch.classList.remove("cart-active");
  // remove mobile header on click of icon-close
  mobHeader.classList.remove("active");
  var megaBackIcon = document.querySelector(".mega-back-icon");
  // Remove expand class from elements with "has-child" class
  showMega.forEach((item) => {
    item.closest(".has-child").classList.remove("expand");
  });
  // again remove megaback icon on click close icon and show apple
  logo.classList.remove("mobile-hide");
  // Check if megabackicon does not contain mobile-hide, then add it
  if (!megaBackIcon.classList.contains("mobile-hide")) {
    megaBackIcon.classList.add("mobile-hide");
  }
});
// copy desktop navbar to mobile-header
var desktopNav = document.querySelector(".navbar");
var mobHeader = document.querySelector(".mobile-header");
mobHeader.innerHTML = desktopNav.innerHTML;
// show mega in mobile header on click of li
var showMega = document.querySelectorAll(".has-child");
showMega.forEach((menu) => menu.addEventListener("click", toggle));
function toggle(e) {
  e.preventDefault();
  showMega.forEach((item) => {
    if (item !== this) {
      item.closest(".has-child").classList.remove("expand");
    }
  });
  if (this.closest(".has-child").classList.contains("expand")) {
    this.closest(".has-child").classList.remove("expand");
  } else {
    this.closest(".has-child").classList.add("expand");
  }
  //  remove apple icon on click menu icon and show megabackicon
  megaBackIcon.classList.remove("mobile-hide");
  logo.classList.toggle("mobile-hide");
}
// remove expand on click megaback icon
megaBackIcon.addEventListener("click", function () {
  // Remove expand class from elements with "has-child" class
  showMega.forEach((item) => {
    item.closest(".has-child").classList.remove("expand");
  });
  megaBackIcon.classList.toggle("mobile-hide");
  logo.classList.remove("mobile-hide");
});

// Targeting the .mega element
var mega = document.querySelectorAll(".mobile-header .mega");
// Remove megabackicon on click on mega
mega.addEventListener("click", function () {
  if (!megaBackIcon.classList.contains("mobile-hide")) {
    megaBackIcon.classList.toggle("mobile-hide");
  }
});

