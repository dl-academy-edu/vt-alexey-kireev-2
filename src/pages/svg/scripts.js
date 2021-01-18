var mobileHeader = document.querySelector(".mobile-header_js");
var headerMobileButton = document.querySelector(".header__mobile-button_js");
var mobileCloseButton = document.querySelector(".mobile-header__close_js");

headerMobileButton.addEventListener("click", function() {
    mobileHeader.classList.add("mobile-header_open");
});


mobileCloseButton.addEventListener("click", function() {
    mobileHeader.classList.remove("mobile-header_open");
});
