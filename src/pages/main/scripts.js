var html = document.querySelector("html");
var popupbuttonclose = document.querySelector(".popup-form-button-close_js");
var popupbuttonopen = document.querySelector(".slider-button_js");

popupbuttonopen.addEventListener("click", function() {
html.classList.add("popup-open");
});

popupbuttonclose.addEventListener("click", function() {
    html.classList.remove("popup-open");
    });
    
    