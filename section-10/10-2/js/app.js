

const data = [{
    name: 'Anakin Skywalker',
    image: 'https://randomuser.me/api/portraits/men/80.jpg',
    height: '188',
    mass: '84',
    hair_color: 'blond',
    skin_color: 'fair',
    eye_color: 'blue',
    birth_year: '41.9BBY',
    gender: 'male',
    homeworld: 'https://swapi.co/api/planets/1/',
    films: [
      'https://swapi.co/api/films/5/',
      'https://swapi.co/api/films/4/',
      'https://swapi.co/api/films/6/'
    ],
    species: [
      'https://swapi.co/api/species/1/'
    ],
    vehicles: [
      'https://swapi.co/api/vehicles/44/',
      'https://swapi.co/api/vehicles/46/'
    ],
    starships: [
      'https://swapi.co/api/starships/59/',
      'https://swapi.co/api/starships/65/',
      'https://swapi.co/api/starships/39/'
    ],
    created: '2014-12-10T16:20:44.310000Z',
    edited: '2014-12-20T21:17:50.327000Z',
    url: 'https://swapi.co/api/people/11/'
  },
  {
    name: 'Wilhuff Tarkin',
    image: 'https://randomuser.me/api/portraits/men/47.jpg',
    height: '180',
    mass: 'unknown',
    hair_color: 'auburn, grey',
    skin_color: 'fair',
    eye_color: 'blue',
    birth_year: '64BBY',
    gender: 'male',
    homeworld: 'https://swapi.co/api/planets/21/',
    films: [
      'https://swapi.co/api/films/6/',
      'https://swapi.co/api/films/1/'
    ],
    species: [
      'https://swapi.co/api/species/1/'
    ],
    vehicles: [],
    starships: [],
    created: '2014-12-10T16:26:56.138000Z',
    edited: '2014-12-20T21:17:50.330000Z',
    url: 'https://swapi.co/api/people/12/'
  },
  {
    name: 'Chewbacca',
    image: 'https://randomuser.me/api/portraits/men/8.jpg',
    height: '228',
    mass: '112',
    hair_color: 'brown',
    skin_color: 'unknown',
    eye_color: 'blue',
    birth_year: '200BBY',
    gender: 'male',
    homeworld: 'https://swapi.co/api/planets/14/',
    films: [
      'https://swapi.co/api/films/2/',
      'https://swapi.co/api/films/6/',
      'https://swapi.co/api/films/3/',
      'https://swapi.co/api/films/1/',
      'https://swapi.co/api/films/7/'
    ],
    species: [
      'https://swapi.co/api/species/3/'
    ],
    vehicles: [
      'https://swapi.co/api/vehicles/19/'
    ],
    starships: [
      'https://swapi.co/api/starships/10/',
      'https://swapi.co/api/starships/22/'
    ],
    created: '2014-12-10T16:42:45.066000Z',
    edited: '2014-12-20T21:17:50.332000Z',
    url: 'https://swapi.co/api/people/13/'
  },
  {
    name: 'Han Solo',
    image: 'https://randomuser.me/api/portraits/men/22.jpg',
    height: '180',
    mass: '80',
    hair_color: 'brown',
    skin_color: 'fair',
    eye_color: 'brown',
    birth_year: '29BBY',
    gender: 'male',
    homeworld: 'https://swapi.co/api/planets/22/',
    films: [
      'https://swapi.co/api/films/2/',
      'https://swapi.co/api/films/3/',
      'https://swapi.co/api/films/1/',
      'https://swapi.co/api/films/7/'
    ],
    species: [
      'https://swapi.co/api/species/1/'
    ],
    vehicles: [],
    starships: [
      'https://swapi.co/api/starships/10/',
      'https://swapi.co/api/starships/22/'
    ],
    created: '2014-12-10T16:49:14.582000Z',
    edited: '2014-12-20T21:17:50.334000Z',
    url: 'https://swapi.co/api/people/14/'
  }
];

const profiles = profileIterator(data);

document.getElementById('next').addEventListener('click', nextProfile);
nextProfile();
function nextProfile() {
  const currentProfile = profiles.next().value;

  if (currentProfile != undefined) {
    document.getElementById('profileDisplay').innerHTML = `
    <ul class="list-group-item">
      <li class="list-group-item">Name: ${currentProfile.name}</li>
      <li class="list-group-item">Height: ${currentProfile.height}</li>
      <li class="list-group-item">Mass: ${currentProfile.mass}</li>
      <li class="list-group-item">Gender: ${currentProfile.gender}</li>
    </ul>
  `;
    document.getElementById('imageDisplay').innerHTML = `
    <img src = "${currentProfile.image}" class="img img-circle"> ;
  `;
  } else {
    window.location.reload();
  }  
}

function profileIterator(profiles) {
  let nextIndex = 0;

  return {
    next: function () {
      return nextIndex < profiles.length ?
        { value: profiles[nextIndex++], done: false } :
        { done: true }
    }
  };
}