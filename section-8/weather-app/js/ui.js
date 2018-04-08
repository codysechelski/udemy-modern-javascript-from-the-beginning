class UI{
  constructor() {
    this.location = document.getElementById('w-location');
    this.description = document.getElementById('w-description');
    this.string = document.getElementById('w-string');
    this.icon = document.getElementById('w-icon');
    this.humidity = document.getElementById('w-humidity');
    this.dewpoint = document.getElementById('w-dewpoint');
    this.feelsLike = document.getElementById('w-feelsLike');
    this.wind = document.getElementById('w-wind');
  }

  paint(weather) {
    this.location.textContent = weather.current_observation.display_location.full;
    this.description.textContent = weather.current_observation.weather;
    this.string.textContent = weather.current_observation.temperature_string;
    this.icon.setAttribute('src', weather.current_observation.icon_url);
    this.humidity.textContent = `Humidity: ${weather.current_observation.relative_humidity}`;
    this.dewpoint.textContent = `Dewpoint: ${weather.current_observation.dewpoint_string}`;
    this.feelsLike.textContent = `Feels Like ${weather.current_observation.feelslike_string}`;
    this.wind.textContent = `Wind: ${weather.current_observation.wind_string}`;
  }
}