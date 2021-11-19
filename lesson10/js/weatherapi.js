
const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=a682a4d8efb27d168b538433ff7508e5";

fetch(apiURL)
  .then((response) => response.json())
  .then((prestonData) => {
    
//console.log(prestonData); for temporary checking for valid response and data parsing

    const temp = Math.floor(convertTemp(prestonData)) 
    const icon = 'https://openweathermap.org/img/w/' + prestonData.weather[0]['icon'] + '.png'
  display(temp, icon)
}); 

function convertTemp(prestonData){
  return (prestonData.main.temp - 273.15) * 9/5 + 32
}

function display(temp, icon){
  const tempSelector = document.querySelector('#current-temp')
  tempSelector.textContent = temp

  const linkSelector = document.querySelector('#imagesrc')
  linkSelector.textContent = icon
  const imgSelector = document.querySelector('#icon')
  imgSelector.setAttribute('src', icon)
  imgSelector.setAttribute('alt', 'Descriptive weather icon')
}



 




  