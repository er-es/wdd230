
           
const temperature = parseInt(document.getElementById(".temperature"));
const windspeed = parseInt(document.getElementById(".windspeed"));

    let windchill = windchill(temperature, windspeed);
            
    document.getElementById("windchill").textContent = windchill + " °F"           
         
function windchill(temperature, windspeed) {
            let f = 35.74 + 0.6215 * temperature - 35.75 * Math.pow(windspeed,0.16) + 0.4275 * temperature * Math.pow(windspeed, 0.16);
                                  
            return f

        }

      
        