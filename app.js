const express = require('express');
const bodyParser = require("body-parser")
const path = require("path")
const exphbs = require("express-handlebars")

// Database
const db = require('./config/database')


// Test database connection
db.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });


//set up server
const app = express();

// Configure handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main"}))
app.set("view engine", "handlebars")

//Set static folder
app.use(express.static(path.join(__dirname, "public")))

// Index route
app.get('/', (req, res) => res.send("Index"))

// Gig routes
app.use('/gigs', require('./routes/gigs'));

const PORT = process.env.PORT || 8888;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
