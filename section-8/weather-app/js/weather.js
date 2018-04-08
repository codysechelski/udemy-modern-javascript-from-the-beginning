class Weather {
  constructor(city, state) {
    this.apiKey = '6866dd4850532759';
    this.city = city;
    this.state = state;
  }

  async getWeather() {
    const response = await fetch(`http://api.wunderground.com/api/${this.apiKey}/geolookup/conditions/forecast/astronomy/almanac/forecast10day/alerts/q/${this.state}/${this.city}.json`);

    const responseData = await response.json();

    return responseData;
  }  

  changeLocation(city, state) {
    this.city = city;
    this.state = state;
  }
}