/*eslint-env browser*/
// Get the modal
var modalProfile = document.getElementById("modal-profile");
var modalPortfolio = document.getElementById("modal-portfolio");

var body = document.getElementsByTagName("BODY")[0];

// Get the button that opens the modal
var btnEditProfile = document.getElementById("edit-profile");
var btnEditPortfolio = document.getElementById("edit-portfolio");

// Get the <span> element that closes the modal
var saveProfile = document.getElementById("save-button");
var closeProfile = document.getElementById("close-modal");

var savePortfolio = document.getElementById("save-button-portfolio");
var closePortfolio = document.getElementById("close-portfolio-modal")

// When the user clicks on the button, open the modal 
btnEditProfile.onclick = function () {
    modalProfile.style.display = "block";
  body.style.overflow = "hidden";
}
btnEditPortfolio.onclick = function () {
    modalPortfolio.style.display = "block";
  body.style.overflow = "hidden";
}

// When the user clicks on <span> (x), close the modal
saveProfile.onclick = function() {
    modalProfile.style.display = "none";
  body.style.overflow = "auto";
}

savePortfolio.onclick = function() {
    modalPortfolio.style.display = "none";
  body.style.overflow = "auto";
}

closeProfile.onclick = function () {
  modalProfile.style.display = "none";
  body.style.overflow = "auto";
}

closePortfolio.onclick = function () {
  modalPortfolio.style.display = "none";
  body.style.overflow = "auto";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modalProfile) {
        modalProfile.style.display = "none";
      body.style.overflow = "auto";
    }
  if (event.target == modalPortfolio) {
        modalPortfolio.style.display = "none";
      body.style.overflow = "auto";
    }
}