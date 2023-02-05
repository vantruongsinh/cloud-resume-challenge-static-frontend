window.addEventListener("load", function() {
  const clickToReveal = document.getElementById("click-to-reveal");

  const annotations = document.querySelectorAll(".annotation");

  clickToReveal.addEventListener("click", function() {
    annotations.forEach(annotation => {
      if (annotation.style.display === "none") {
        annotation.style.display = "block";
      } else {
        annotation.style.display = "none";
      }
      
    });
    
  });

});