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
    let url = 'https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid={key}';

    //fetch the weather
    fetch(url)
    .then(resp =>{
      if(!resp.ok) throw new Error(resp.statusText);
      return resp.json();
    })

    .then(data =>{
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
  let row = document.querySelector('.weather.row');
    row.innerHTML = resp.daily.map((day) => {
      if(idx =< 2) {
      return '<p>Day</p>';

}})
    .join('');
  }


  let html = 
  <div class="col">
  <div class="card" style="width: 30vw">
    <h5 class="card-title p-2">Date</h5>
    <img
      src="http://openweathermap.org/img/wn/10d@4x.png"
      class="card-img-top"
      alt="Weather description"
    />
    <div class="card-body">
      <h3 class="card-title">Weather Label</h3>
      <p class="card-text">High Temp Low Temp</p>
      <p class="card-text">HighFeels like</p>
      <p class="card-text">Pressure</p>
      <p class="card-text">Humidty</p>
      <p class="card-text">UV Index</p>
      <p class="card-text">Precipitation</p>
      <p class="card-text">Dew Point</p>
      <p class="card-text">Wind speed and direction</p>
      <p class="card-text">Sunrise</p>
      <p class="card-text">Sunset</p>
    </div>
    </div>
    </div>

