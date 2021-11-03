const copyrightyear = document.getElementById("copyrightyear");
copyrightyear.textContent = new Date().getFullYear();



const datefield = document.querySelector("#date");

const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-UK", { dateStyle: "full" }).format(now);

datefield.innerHTML = `${fulldate}`;
	
	




