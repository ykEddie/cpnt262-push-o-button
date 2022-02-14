const welcoming = document.querySelector(".welcoming")

document.addEventListener("mouseover", myFunction);
document.addEventListener("mouseout", mySecondFunction);

function myFunction() {
  document.getElementById("welcome").innerHTML = "Welcome!"
}

function mySecondFunction() {
  document.getElementById("welcome").innerHTML = "Hover over me!"
}