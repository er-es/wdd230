const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })

  .then(function (jsonObject) {

    //console.table(jsonObject); for temporary checking for valid response and data parsing
    
    const towns = jsonObject['towns'];

    const townSelection = towns.filter(town => town.averageRainfall < 17);

   
   
    townSelection.forEach(town=> { 
        const card = document.createElement('section');
        const name = document.createElement('h2');
        const motto = document.createElement('h3');
        const yearFounded = document.createElement('h4');
        const currentPopulation = document.createElement('h4');
        const averageRainfall = document.createElement('h4');
        const photo = document.createElement('img');



        name.textContent = town.name;
        motto.textContent = town.motto;
        yearFounded.textContent =`Year Founded: ${town.yearFounded}`;
        currentPopulation.textContent =`Population: ${town.currentPopulation}`;
        averageRainfall.textContent =`Annual Rain Fall: ${town.averageRainfall}`;
        photo.setAttribute('src', `images/${town.photo}`);
        
        card.appendChild(name);
        card.appendChild(motto);
        card.appendChild(yearFounded);
        card.appendChild(currentPopulation);
        card.appendChild(averageRainfall);
        card.appendChild(photo);

      document.querySelector('div.towns').appendChild(card);
            
    })
  });

        
 