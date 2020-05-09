import axios from "axios";

export default {
  // Gets all the Favorties
  getFavorites: function () {
    return axios.get("/api/favorites");
  },
  // Deletes the Favorite with the given id
  deleteFavorite: function (id) {
    return axios.delete("/api/favorites/" + id);
  },
  // Saves a Favorite to the database
  saveFavorite: function (locationData) {
    return axios.post("/api/favorites", locationData);
  },
};

const coronaurl = "https://covid19.mathdro.id/api";

export const fetchData = async (country) => {
  let changeableUrl = coronaurl;

  if (country) {
    changeableUrl = `${coronaurl}/countries/${country}`;
  }

  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(changeableUrl);

    return { confirmed, recovered, deaths, lastUpdate };
  } catch (error) {
    return error;
  }
};

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${coronaurl}/daily`);
    return data.map(({ confirmed, deaths, reportDate: date }) => ({
      confirmed: confirmed.total,
      deaths: deaths.total,
      date,
    }));
  } catch (error) {
    return error;
  }
};

export const fetchCountries = async () => {
  try {
    const {
      data: { countries },
    } = await axios.get(`${coronaurl}/countries`);

    return countries.map((country) => country.name);
  } catch (error) {
    return error;
  }
};

var newsurl = 'http://newsapi.org/v2/top-headlines?' +
          'country=us&' +
          'apiKey=240eb95a24ea43e886bb5f1fb00ffe5c';
var req = new Request(newsurl);
fetch(req)
    .then(function(response) {
        console.log(response.json());
    })