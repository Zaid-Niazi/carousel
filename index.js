const carousel = document.querySelector(".carousel");
const right = document.querySelector(".right");
const left = document.querySelector(".left");
let index = 2;
const imageDiv = document.querySelectorAll(".imageDiv");
const circles = document.querySelectorAll(".circles");

function imageDisplayer(e) {
  console.log(e);
  const arrowType = document.getElementById(`${e.target.id}`);
  let image = document.querySelector(`.i${index}`);
  circleColorChanger(index);
  imageDiv.forEach((div) => {
    div.style.display = "none";
  });
  image.style.display = "block";

  if (arrowType.id === "right") {
    if (index > 0 && index < 4) {
      index++;
    } else {
      index = 1;
    }
  } else if (arrowType.id === "left") {
    if (index > 1 && index < 5) {
      index--;
    } else {
      index = 4;
    }
  }
}

circles.forEach((circle) => {
  circle.addEventListener("click", circleLog);
});

function circleLog(e) {
  const text = e.target.classList.value;
  let index = text.charAt(1);
  let image = document.querySelector(`.i${index}`);
  imageDiv.forEach((div) => {
    div.style.display = "none";
  });
  image.style.display = "block";
  circleColorChanger(index);
}

function circleColorChanger(index) {
  const indCircle = document.querySelector(`.c${index}`);
  for (i = 1; i <= 4; i++) {
    const indCircle = document.querySelector(`.c${i}`);
    indCircle.style.backgroundColor = "transparent";
  }

  indCircle.style.backgroundColor = "black";
}

right.addEventListener("click", imageDisplayer);
left.addEventListener("click", imageDisplayer);

myInterval = setInterval(autoImageChanger, 5000);

function autoImageChanger() {
  let image = document.querySelector(`.i${index}`);
  circleColorChanger(index);
  imageDiv.forEach((div) => {
    div.style.display = "none";
  });
  image.style.display = "block";

  if (index > 0 && index < 4) {
    index++;
  } else {
    index = 1;
  }
}
