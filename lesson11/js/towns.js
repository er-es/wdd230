const townsURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(townsURL)
  .then(function (response) {
    return response.json();
  })

  .then(function (jsonObject) {

    //console.table(jsonObject); for temporary checking for valid response and data parsing
    
    const towns = jsonObject['towns'];

    const townSelection = towns.filter(town => town.averageRainfall < 17);

   
   
    townSelection.forEach(town=> { 
        const card = document.createElement('section');
        const h2 = document.createElement('h2');
        const photo = document.createElement('img');
        const motto = document.createElement('h3');
        const info = document.createElement('div');
        const founded = document.createElement('p');
        const population = document.createElement('p');
        const rainfall = document.createElement('p');
              
        h2.textContent = town.name;
        founded.textContent = `Year Founded: ${town.yearFounded}`;
        population.textContent = `Population: ${town.currentPopulation}`;
        rainfall.textContent = `Annual Rain Fall: ${town.averageRainfall}`;
        photo.setAttribute('src', `images/${town.photo}`);
        photo.setAttribute('alt', `weather in ${town.name}`);
        motto.textContent = town.motto;
       
      
        card.appendChild(h2);
        card.appendChild(photo);
        card.appendChild(motto);
        card.appendChild(founded);
        card.appendChild(population);
        card.appendChild(rainfall);
        
      
        document.querySelector('div.towns').appendChild(card, info);
      })
    });

