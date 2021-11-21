
const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=a682a4d8efb27d168b538433ff7508e5";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    
    console.log(jsObject); 

    const currentTemp = document.querySelector('#current-temp');
    const weathericon = document.querySelector('#icon');

    currentTemp.textContent = jsObject.main.temp;
    let imgsrc = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
    let imgalt = jsObject.weather[0].description;

    currentTemp.textContent = jsObject.main.temp;
    weathericon.setAttribute('src', imgsrc);
    weathericon.setAttribute('alt', imgalt);

  });




   
 



  