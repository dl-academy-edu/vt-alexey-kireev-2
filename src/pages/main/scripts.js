var html = document.querySelector("html");
var popupbuttonclose = document.querySelector(".popup__close_js");
var popupbuttonopen = document.querySelector(".slider__button_js");

popupbuttonopen.addEventListener("click", function () {
    html.classList.add("popup-open");
});

popupbuttonclose.addEventListener("click", function () {
    html.classList.remove("popup-open");
});

var mobileHeader = document.querySelector(".mobile-header_js");
var headerMobileButton = document.querySelector(".header__mobile-button_js");
var mobileCloseButton = document.querySelector(".mobile-header__close_js");

headerMobileButton.addEventListener("click", function () {
    mobileHeader.classList.add("mobile-header_open");
});


mobileCloseButton.addEventListener("click", function () {
    mobileHeader.classList.remove("mobile-header_open");
});
