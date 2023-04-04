const newYork = document.querySelector("#new-york");
const london = document.querySelector("#london");
const seoul = document.querySelector("#seoul");
const form = document.querySelector("#form");
const inputField = document.querySelector("#search");

//ui selectors
const cityName = document.querySelector("#city-name");
const weatherIcon = document.querySelector("img");
const temp = document.querySelector("#temp");
const description = document.querySelector("#description");
const date = document.querySelector("#when");
// ui;
// Loading click event listeners

newYork.addEventListener("click", () => {
  getWeather("new+york");
});

london.addEventListener("click", () => {
  getWeather("london");
});

seoul.addEventListener("click", () => {
  getWeather("seoul");
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  getWeather(inputField.value);
});

//main function ?
const getWeather = async (city) => {
  const apiKEY = "65de1f2f61fa4ff89b36f5621ee703df";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKEY}&units=metric`;
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);

  //datetime conversion
  const dateString = new Date(data.dt * 1000).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  // weather icon
  const icon = data.weather[0].icon;
  const weatherIconUrl = `https://openweathermap.org/img/wn/${icon}@4x.png`;

  //adding to ui
  cityName.textContent = data.name;
  temp.textContent = Math.floor(data.main.temp);
  description.textContent = data.weather[0].description;
  weatherIcon.src = weatherIconUrl;
  date.textContent = dateString;

  return data;
};
