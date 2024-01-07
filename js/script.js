const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];


const d = new Date();
let namemonth = month[d.getMonth()];
let day = weekday[d.getDay()];

let nextDay = new Date();
nextDay.setDate(d.getDate() + 1);
let therd = new Date();
therd.setDate(d.getDate() + 2);

let inputSerch = document.getElementById("inputSerch")
let findSearch = document.getElementById("findSearch")
findSearch.addEventListener("click",()=>{
    weather(inputSerch.value)
})
let listUp = []
async function weather( contrey =  "egypt") {
    let myHttp = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=f3b91902c7ab48fbaf6145132240301&q=${contrey}&days=3`)
    listUp =  await  myHttp.json()
    displayWea(listUp)
}
weather()
function displayWea(listUp) {
    console.log(listUp);
    console.log(listUp.forecast.forecastday[1].day.condition);
    document.getElementById("contentWeather").innerHTML = 
    `<div class="row translate-mid">
    <div class="cards p-0 col-md-4 text-white rounded-start-3 rou">
      <div
        class="header d-flex justify-content-between align-items-center rounded-top-3"
      >
        <span>${day}</span>
        <span>${d.getDate()} ${ namemonth}</span>
      </div>
      <div class="content-card">
        <p class="px-4 py-4 fs-4">${listUp.location.name}</p>
        <h1 class="display-2 px-4 position-relative fw-medium">
          ${listUp.current.temp_c}<span class="display-6 position-absolute translate-middle-y"
            >o</span
          >
          c
          <img src="${listUp.current.condition.icon}" width="100" />
        </h1>
        <span class="colorstyled px-4">${listUp.current.condition.text}</span>
        <ul class="list-unstyled d-flex mt-3 px-4">
          <li><img src="image/icon-umberella@2x.png" /> 20%</li>
          <li><img src="image/icon-wind@2x.png" /> 18km/h</li>
          <li><img src="image/icon-compass@2x.png" /> East</li>
        </ul>
      </div>
    </div>
    <div
      class="p-0 cards col-md-4 text-white d-flex flex-column align-items-center text-center"
    >
      <div
        class="header d-flex justify-content-between align-items-center"
      >
        <span>${weekday[ nextDay.getDay()]}</span>
      </div>
      <div class="content-card">
        <p class="px-2 py-4 fs-4">${listUp.location.name}</p>
        <img src="${listUp.forecast.forecastday[1].day.condition.icon}" width="40" />
        <h1 class="position-relative fw-medium">
          ${listUp.forecast.forecastday[1].day.maxtemp_c}<span class="position-absolute fs-6">o</span>
          c
        </h1>
        <p class="position-relative">
        ${listUp.forecast.forecastday[1].day.mintemp_c}<span class="position-absolute fs-6">o</span>
        </p>
        <span class="colorstyled">${listUp.forecast.forecastday[1].day.condition.text}</span>
      </div>
    </div>
    <div
      class="p-0 cards col-md-4 text-white d-flex flex-column align-items-center text-center"
    >
      <div
        class="header d-flex justify-content-center align-items-center w-100"
      >
        <span>${weekday[ therd.getDay()]}</span>
      </div>
      <div class="content-card">
        <p class="px-2 py-4 fs-4">${listUp.location.name}</p>
        <img src="${listUp.forecast.forecastday[2].day.condition.icon}" width="40" />
        <h1 class="position-relative fw-medium">
        ${listUp.forecast.forecastday[2].day.maxtemp_c}<span class="position-absolute fs-6">o</span>
          c
        </h1>
        <p class="position-relative">
        ${listUp.forecast.forecastday[2].day.mintemp_c} <span class="position-absolute fs-6">o</span>
        </p>
        <span class="colorstyled">${listUp.forecast.forecastday[2].day.condition.text}</span>
      </div>
    </div>
  </div>`
}
