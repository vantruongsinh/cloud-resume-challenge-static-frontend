const clickToReveal = document.getElementById("click-to-reveal");

const annotation = document.querySelector(".annotation");

clickToReveal.addEventListener("click", function() {
  document.querySelector(".annotation").style.display = "block";
});

console.log("event");