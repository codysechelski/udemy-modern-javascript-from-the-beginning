class Weather {
  constructor(city, state) {
    this.apiKey = '6866dd4850532759';
    this.city = city;
    this.state = state;
  }

  async getWeather() {
    const uri = `http://api.wunderground.com/api/${this.apiKey}/geolookup/conditions/forecast/astronomy/almanac/forecast10day/alerts/q/${this.state}/${this.city}.json`
    console.log(uri);
    const response = await fetch(uri);

    const responseData = await response.json();

    return responseData;
  }  

  changeLocation(city, state) {
    this.city = city;
    this.state = state;
  }
}