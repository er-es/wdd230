const milisecondsToDays = 8640000;
const lastVisit = localStorage.getItem('lastvisit') || Date.now();

let numberofDays= Math.abs(((lastVisit - Date.now()) / milisecondsToDays).toFixed(0))
localStorage.setItem('lastvisit', Date.now());

