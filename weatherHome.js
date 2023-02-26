const newYork = document.querySelector("#new-york");
const london = document.querySelector("#london");
const seoul = document.querySelector("#seoul");
const form = document.querySelector("#form");
const weatherOutput = document.querySelector("#weather-output").innerHTML;

newYork.addEventListener("click", () => {
  getWeather("new+york");
});

london.addEventListener("click", () => {
  getWeather("london");
});

seoul.addEventListener("click", () => {
  getWeather("seoul");
});
// Loading click event listeners
// let loadEvents = (city) => {
// newYork.addEventListener("click");
// seoul.addEventListener("click");
// };

//async/await version
const getWeather = async (city) => {
  let apiKEY = "13011a12443e3945a8f2bfafc28bbdc0";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKEY}`;
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  return data;
};

// loadEvents();
