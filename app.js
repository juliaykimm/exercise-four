const express = require("express"); // "npm install express" to install express
const app = express();
const port = process.env.PORT || 4000;

// config values for firebase
const firebaseConfig = {
  apiKey: "AIzaSyCycsLA3LIqt2X0NaTVVr28KB4U6HXK3SI",
  authDomain: "exercise-four-ef085.firebaseapp.com",
  databaseURL: "https://exercise-four-ef085.firebaseio.com",
  projectId: "exercise-four-ef085",
  storageBucket: "exercise-four-ef085.appspot.com",
  messagingSenderId: "596239995991",
  appId: "1:596239995991:web:1ab8c4427c16fa1098ff12",
};

// firebase
const firebase = require("firebase");
firebase.initializeApp(firebaseConfig);

// Routes Import
const indexRoute = require("./routes/index.js");
const postRoute = require("./routes/post.js");
const createRoute = require("./routes/createBlogpost.js");
// Routes
app.use("/", indexRoute);
app.use("/post", postRoute);
app.use("/create", createRoute);

app.listen(port, () =>
  console.log(`Exercise Four is running at local host:${port}`)
);
