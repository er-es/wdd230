//Pancakes banner aside
const banner = document.querySelector(".pancakes");
const days = new Date();

if (days.getDay() == 5) {
  banner.style.display = "block";
} else {
  banner.style.display = "none";
}
