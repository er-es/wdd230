
//Footer javascript for copyright year

const copyrightyear = document.getElementById("copyrightyear");
copyrightyear.textContent = new Date().getFullYear();

//Date time javascript on footer
const today = new Date();
const fulldate = new Intl.DateTimeFormat("en-UK", { dateStyle: "full" }).format(today);

//Hamburger menu
function toggleMenu(){
  document.getElementsByClassName('responsive')[0].classList.toggle('navigation');
 }

//Pancakes banner aside
const banner = document.querySelector('.pancakes');
const days = new Date();


  if (days.getDay() == 5) {
    saturdayBanner.style.display = 'block';
  } else {
    banner.style.display = 'none';
  }
    
    