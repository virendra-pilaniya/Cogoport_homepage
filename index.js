var current_count = 0;
function changeButton(x) {
  current_count = x;
  let y = document.getElementsByClassName("laptopClass");
  if (current_count === 1) {
    document.getElementById("leftButton").style.backgroundColor =
      "rgb(223, 220, 220)";
    document.getElementById("rightButton").style.backgroundColor = "#fbdc00";
    document.getElementById("laptopImage").src = "images/laptop2.png";
  } else {
    document.getElementById("rightButton").style.backgroundColor =
      "rgb(223, 220, 220)";
    document.getElementById("leftButton").style.backgroundColor = "#fbdc00";
    document.getElementById("laptopImage").src = "images/laptop1.png";
  }
  y.appendChild(newImg);
}

let Vid_Image = document.querySelector(".homepage-vid");
let button_Vid = document.querySelector(".vid-btn");
let ytVid = document.querySelector(".ytvid");

Vid_Image.addEventListener("click", function () {
  // console.log('clicked');
  if (ytVid.classList.contains("hidden")) {
    ytVid.classList.remove("hidden");
  } else {
    ytVid.classList.add("hidden");
  }
});

button_Vid.addEventListener("click", function () {
  // console.log('clicked');
  if (ytVid.classList.contains("hidden")) {
    ytVid.classList.remove("hidden");
  } else {
    ytVid.classList.add("hidden");
  }
});
