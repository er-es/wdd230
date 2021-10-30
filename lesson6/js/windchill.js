
           
const temperature = parseInt(document.getElementById(".temperature"));
const windspeed = parseInt(document.getElementById(".windspeed"));

    let windchill = windchill(temperature, windspeed);
            
    document.getElementById("windchill").textContent = windchill + " °F"           
         
function windchill(temperature, windspeed) {
            let f = 35.74 + 0.6215 * temperature - 35.75 * Math.pow(windspeed,0.16) + 0.4275 * temperature * Math.pow(windspeed, 0.16);
                                  
            return f

        }


  
function main() {
    let t = 32;
    let s = 15;
       
   let answer = windChill(t, s);
 
   document.querySelector('#wind-chill').textContent = answer.toFixed(0);
 }
  
 
 
 function windChill(tempF, speed) {
   let answer = 35.74 + 0.6215 * tempF - 35.75 * (speed ** 0.16) + 0.4275 * tempF * (speed ** 0.16);
 
   return answer;
 }
 
 main();      

      
 let temp = parseFloat(document.querySelector("#temp").textContent);

 let speed = parseFloat(document.querySelector("#speed").textContent);
 
 if (temp <= 50 && speed > 3){
     let windChill = Math.round(35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16))  
     document.querySelector('#wind-chill').innerHTML = windChill + "°F"
 }
    