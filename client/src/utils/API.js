import axios from "axios";

// The getRecipes method retrieves recipes from the server
// It accepts a "query" or term to search the recipe api for
export default {
  getArticles: function(query) {
    return axios.get("/api/articles", { params: query });
  },
  // Gets all articles
  getSavedarticles: function() {
    return axios.get("/api/savedarticles");
  },
  // Gets the book with the given id
  getSavedarticle: function(id) {
    return axios.get("/api/savedarticles/" + id);
  },
  // Deletes the book with the given id
  deleteSavedarticle: function(id) {
    return axios.delete("/api/savedarticles/" + id);
  },
  // Saves a book to the database
  saveArticle: function(articleData) {
    return axios.post("/api/savedarticles", articleData);
  }

};