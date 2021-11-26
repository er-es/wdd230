//Footer javascript for copyright year

const copyrightyear = document.getElementById("copyrightyear");
copyrightyear.textContent = new Date().getFullYear();

//Date time javascript on footer
const today = new Date();
const fulldate = new Intl.DateTimeFormat("en-UK", { dateStyle: "full" }).format(
  today
);


//Pancakes banner aside
const banner = document.querySelector(".pancakes");
const days = new Date();

if (days.getDay() == 5) {
  banner.style.display = "block";
} else {
  banner.style.display = "none";
}

