
let windchill = function(temperature, windspeed) {
  if (temperature <= 50 && windspeed > 3) {

      return Math.round((
          35.74 + 
          (0.6215 * temperature) - 
          (35.75 * Math.pow(windspeed, 0.16)) + 
          (0.4275 * temperature * Math.pow(windspeed, 0.16))
      ));
  }
  else {
      return 'NA';
  }
}


const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5607916&units=imperial&appid=a682a4d8efb27d168b538433ff7508e5";

fetch(apiURL)
.then(function (response) {
    return response.json();
})

.then(function (jsonObject) {
    console.table(jsonObject);  

    const temp = jsonObject.main.temp;
    const wind = jsonObject.wind.speed;
    
    document.querySelector('.currently').textContent = `${jsonObject.weather[0].main}`;
    document.querySelector('.temperature').textContent = `${temp}`;
    document.querySelector('.windchill').textContent = `${windchill(temp, wind)}`;
    document.querySelector('.humidity').textContent = `${jsonObject.main.humidity}`;
    document.querySelector('.windspeed').textContent = `${wind}`;
});

const forecastURL = "https://api.openweathermap.org/data/2.5/forecast?id=5607916&units=imperial&appid=a682a4d8efb27d168b538433ff7508e5";

fetch(forecastURL)
.then(function (response) {
    return response.json();
})
.then(function (jsonObject) {
    console.table(jsonObject);  

    let i = 0;
    const weekdays =['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    jsonObject.list.forEach(day => {
        if (day.dt_txt.includes('18:00:00')) {
            i++;
           
            let today = new Date(day.dt_txt).getDay();
            document.querySelector('#dayofweek' + i).textContent = weekdays[today]; 
            document.querySelector('#day' + i).textContent = `${day.main.temp}`;
            document.querySelector('#icon' + i).src = `https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`;
            document.querySelector('#icon' + i).alt = day.weather[0].main;
        }
    })
});
