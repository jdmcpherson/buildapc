const path = require('path');
const express = require('express');
const logger = require('morgan');
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");

app.use(logger('dev'));
app.set('view engine', 'ejs');

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', function (req, res) {
   res.render('index');
});

app.get('/build', function (req, res) {
   res.render('build');
});

app.get('/products', function (req, res) {
   res.render('products');
});

app.get('/guides', function (req, res) {
   res.render('guides');
});

app.get('/submitted', function (req, res) {
   res.render('submitted');
});

app.get('/login', function (req, res) {
   res.render('login');
});

const COOKIE_MAX_AGE = 1000 * 60 * 60 * 24 * 7;
app.post("/login", (request, response) => {
   console.log(request.body);

   response.cookie("username", request.body.username, { maxAge: COOKIE_MAX_AGE });
   response.redirect("/");
});

const DOMAIN = 'localhost';
const PORT = '8080';
app.listen(PORT, DOMAIN, () => {
   console.log(`🖥 Server listenning on http://${DOMAIN}:${PORT}`);
});