
//Footer javascript for copyright year

const copyrightyear = document.getElementById("copyrightyear");
copyrightyear.textContent = new Date().getFullYear();

//Date time javascript on footer
const today = new Date();
const fulldate = new Intl.DateTimeFormat("en-UK", { dateStyle: "full" }).format(today);

//Hamburger menu
function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}

//Pancakes banner aside
const days = new Date();
    if(days.getDate() == 5) {
    document.getElementById('pancakes').style.display = 'block';
    }


    