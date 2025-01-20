const trafficElement = document.querySelectorAll(".trafficLight");
trafficElOne = trafficElement[0];
trafficElTwo = trafficElement[1];
trafficElTree = trafficElement[2];

function makeGreen() {
  document.addEventListener("click", function (event) {
    const clickedElement = event.target;
    if (clickedElement.classList.contains("trafficLight")) {
      trafficElOne.style.backgroundColor = "green";
      trafficElTwo.style.backgroundColor = "black";
      trafficElTree.style.backgroundColor = "black";
    }
  });
  document.addEventListener("click", makeYellow);
  document.removeEventListener("click", makeGreen);
}

function makeYellow() {
  document.addEventListener("click", function (event) {
    const clickedElement = event.target;
    if (clickedElement.classList.contains("trafficLight")) {
      trafficElOne.style.backgroundColor = "black";
      trafficElTwo.style.backgroundColor = "yellow";
      trafficElTree.style.backgroundColor = "black";
    }
  });
  document.addEventListener("click", makeRed);
  document.removeEventListener("click", makeYellow);
}

function makeRed() {
  document.addEventListener("click", function (event) {
    const clickedElement = event.target;
    if (clickedElement.classList.contains("trafficLight")) {
      trafficElOne.style.backgroundColor = "black";
      trafficElTwo.style.backgroundColor = "black";
      trafficElTree.style.backgroundColor = "red";
    }
  });
  document.addEventListener("click", makeGreen);
  document.removeEventListener("click", makeRed);
}

document.addEventListener("click", makeGreen);
