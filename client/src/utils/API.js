import axios from "axios";

export default {
  
  // Gets all the Favorties
  getFavorites: function() {
    return axios.get("/api/favorites");
  },
  // Deletes the Favorite with the given id
  deleteFavorite: function(id) {
    return axios.delete("/api/favorites/" + id);
  },
  // Saves a Favorite to the database
  saveFavorite: function(locationData) {
    return axios.post("/api/favorites", locationData);
  }
};
