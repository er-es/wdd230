const loadingImg = document.querySelectorAll("img[data-src]");

const imgOpt = {
  threshold: 1,
  rootMargin: "0px 0px 100px 0px",
};

const loadImg = (img) => {
  img.setAttribute("src", img.getAttribute("data-src"));
  img.onload = () => {
    img.removeAttribute("data-src");
  };
};

const imgObs = new IntersectionObserver((items, imgObserver) => {
  items.forEach((item) => {
    if (!item.isIntersecting) {
      return;
    } else {
      loadImg(item.target);
      imgObs.unobserve(item.target);
    }
  });
}, imgOpt);

loadingImg.forEach((image) => {
imgObs.observe(image);

});
