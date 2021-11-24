//Footer javascript for copyright year

const copyrightyear = document.getElementById("copyrightyear");
copyrightyear.textContent = new Date().getFullYear();

//Date time javascript on footer
const today = new Date();
const fulldate = new Intl.DateTimeFormat("en-UK", { dateStyle: "full" }).format(
  today
);

//Hamburger menu
function toggleMenu() {
  document.getElementsByClassName("responsive")[0].classList.toggle("navigation");
}

//Pancakes banner aside
const banner = document.querySelector(".pancakes");
const days = new Date();

if (days.getDay() == 5) {
  banner.style.display = "block";
} else {
  banner.style.display = "none";
}

//Lazy loading gallery pictures
const imagesToLoad = document.querySelectorAll("img[data-src]");

const imgOptions = {
  threshold: 1,
  rootMargin: "0px 0px 100px 0px",
};

const loadImages = (img) => {
  img.setAttribute("src", img.getAttribute("data-src"));
  img.onload = () => {
    img.removeAttribute("data-src");
  };
};

const imgObserver = new IntersectionObserver((items, imgObserver) => {
  items.forEach((item) => {
    if (!item.isIntersecting) {
      return;
    } else {
      loadImages(item.target);
      imgObserver.unobserve(item.target);
    }
  });
}, imgOptions);

imagesToLoad.forEach((image) => {
  imgObserver.observe(image);
});
