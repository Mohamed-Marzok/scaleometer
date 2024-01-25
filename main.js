let btnIncrease = document.querySelector(".btn-increase");
let btnDecrease = document.querySelector(".btn-decrease");
let arrow = document.querySelector(".arrow");
let scales = document.querySelectorAll(`.speedometer-scale`);
let currentDeg = -90;
btnIncrease.addEventListener("click", function () {
  if (currentDeg < 90) {
    arrow.style.transform = `translate(-50%, 15px) rotate(${
      currentDeg + 10
    }deg)`;
    currentDeg += 10;

    scales.forEach(function (scale, index) {
      // Get the computed style of the scale element
      var computedStyle = window.getComputedStyle(scale);
      // Extract the rotation angle from the custom property --rot
      var scaleRot = parseFloat(computedStyle.getPropertyValue("--rot"));

      if (scaleRot <= currentDeg) {
        if (scaleRot <= -40) {
          scale.style.background = "#04fc43";
        } else if (scaleRot <= 20) {
          scale.style.background = "yellow";
        } else if (scaleRot <= 80) {
          scale.style.background = "#ff2972";
        } else {
          scale.classList.add("active");
        }
      }
    });
  }
});
btnDecrease.addEventListener("click", function () {
  if (currentDeg > -90) {
    arrow.style.transform = `translate(-50%, 15px) rotate(${
      currentDeg - 10
    }deg)`;
    currentDeg -= 10;
  }

  scales.forEach(function (scale, index) {
    // Get the computed style of the scale element
    var computedStyle = window.getComputedStyle(scale);
    // Extract the rotation angle from the custom property --rot
    var scaleRot = parseFloat(computedStyle.getPropertyValue("--rot"));

    if (scaleRot > currentDeg) {
      scale.style.background = "#2f363e";
      scale.classList.remove("active");
    }
  });
});
