window.addEventListener("load", function() {
  const clickToReveal = document.getElementById("click-to-reveal");

  const annotations = document.querySelectorAll(".annotation");

  clickToReveal.addEventListener("click", function() {
    annotations.forEach(annotation => {
      if (annotation.style.display === "block") {
        annotation.style.display = "none";
      } else {
        annotation.style.display = "block";
      }
      
    });
    
  });

});