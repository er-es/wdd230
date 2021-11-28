//Footer javascript for copyright year

const copyrightyear = document.getElementById("copyrightyear");
copyrightyear.textContent = new Date().getFullYear();

//Date time javascript on footer
const today = new Date();
today.textContent = new Intl.DateTimeFormat("en-UK", { dateStyle: "full" }).format(
  today
);
