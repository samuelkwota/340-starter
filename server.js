/* ******************************************
 * This server.js file is the primary file of the 
 * application. It is used to control the project.
 *******************************************/
/* ******utilities*******/
const utilities = require('./utilities');

// Example usage
const formattedDate = utilities.formatDate(new Date());
console.log('Formatted Date:', formattedDate);

const randomNumber = utilities.getRandomNumber(1, 100);
console.log('Random Number:', randomNumber);

const capitalizedString = utilities.capitalizeFirstLetter('hello world');
console.log('Capitalized String:', capitalizedString);

const isValid = utilities.isValidEmail('example@example.com');
console.log('Is Valid Email:', isValid);

/* ***********************
 * Require Statements
 *************************/
const express = require("express")
const expressLayouts = require("express-ejs-layouts")
const env = require("dotenv").config()
const app = express()
const path = require('path')
const static = require("./routes/static")

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Index route
app.get("/", function(req, res){
  res.render("index", { title: "Home" });
})

/* ***********************
 * View Engine and Templates
 *************************/
app.set("view engine", "ejs")
app.use(expressLayouts)
app.set("layout", "./layouts/layout") // not at views root

/* ***********************
 * Routes
 *************************/
app.use(static)
// File Not Found Route - must be last route in list
app.use(async (req, res, next) => {
  next({status: 404, message: 'Sorry, we appear to have lost that page.'});
});

/* ***********************
* Express Error Handler
* Place after all other middleware
*************************/
app.use(async (err, req, res, next) => {
  let nav = await utilities.getNav();
  console.error(`Error at: "${req.originalUrl}": ${err.message}`);
  res.status(err.status || 500);
  res.render('errors/error', {
      title: err.status || 'Server Error',
      message: err.message,
      nav
  });
});

/* ***********************
 * Local Server Information
 * Values from .env (environment) file
 *************************/
const port = process.env.PORT
const host = process.env.HOST

/* ***********************
 * Log statement to confirm server operation
 *************************/
app.listen(port, () => {
  console.log(`app listening on ${host}:${port}`)
})
