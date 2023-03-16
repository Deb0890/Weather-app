const newYork = document.querySelector("#new-york");
const london = document.querySelector("#london");
const seoul = document.querySelector("#seoul");
const form = document.querySelector("#form");
const inputValue = form.search.value;
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
  getWeather(inputValue);
});

//async/await version
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

  cityName.textContent = data.name;
  temp.textContent = Math.floor(data.main.temp);
  description.textContent = data.weather[0].description;
  date.textContent = dateString;

  // console.log(temp);

  return data;
};
