var openPopupButton = document.getElementById("openPopup");
var closePopupButton = document.getElementById("closePopup");
var popupContainer = document.getElementById("popupContainer");

openPopupButton.addEventListener("click", function() {
  popupContainer.style.display = "block";
});

closePopupButton.addEventListener("click", function() {
  popupContainer.style.display = "none";
});
