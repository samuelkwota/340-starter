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

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).render('500', { title: 'Server Error' });
});

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


/* ***********************
* Express Error Handler
* Place after all other middleware
*************************/

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).render('errors/error');
});

// 404 handler
app.use((req, res, next) => {
  res.status(404).render('errors/error');
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
