const express = require('express')
const PORT = process.env.PORT || 3006;
const app = express();
<<<<<<< HEAD
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist"
);

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "login/html"));
});

app.get("/home", function (req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
=======
app.use(express.static('./build'));
app.listen(PORT, () => {
  console.log(`😎 Server is listening on port ${PORT}`);
>>>>>>> 37d774246a886414ad3dcaef6f0d5ef6c08bf9d8
});

// const mysql = require('mysql')