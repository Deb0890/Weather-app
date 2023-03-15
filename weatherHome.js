const newYork = document.querySelector("#new-york");
const london = document.querySelector("#london");
const seoul = document.querySelector("#seoul");
const form = document.querySelector("#form");
const inputValue = form.search.value;
//ui selectors
const cityName = document.querySelector("#city-name");

// ui

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
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKEY}`;
  const response = await fetch(url);
  const data = await response.json();
  console.log(data.name);

  cityName.textContent = data.name;

  return data;
};
