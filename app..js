const app = {
  init: () => {
    document.getElementById('btnGet')
      .addEventListener('click', app.fetchWeather);

    document.getElementById('btnCurrent')
      .addEventListener('click', app.getLocation);
  },

  fetchWeather: (e) => {
    let lat = document.getElementById('latitude').value;
    let lon = document.getElementById('longitude').value;
    let key = 'e165acd47135b891a9280d1fb9c62c54';
    let lang = 'en';
    let units = 'metric';
    let stringPassIn = 'https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&appid={API key}l?';

    //fetch the weather
    fetch(stringPassIn)
    .then(resp =>{
      if(!resp.ok) throw new Error(resp.statusText);
      return resp.json();
    })

    .then(Data =>{
      app.showWeather(data);
    })

    .catch (console.err);

  },
  getLocation: (e) => {
    document.getElementById ('latitude').value = 
    position.coords.latitude.toFixed(2);
    document.getElementById ('longitude').value =
    position.coords.longitude.toFixed (2);
},


ftw: (position) => {

},

wtf: (err) => {

},

showWeather:( resp) => {
  console.log (resp);
  let row = document.querySelector('weather.row');

}

}

