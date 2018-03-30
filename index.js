const path = require('path');
const express = require('express');
const logger = require('morgan');
const app = express();

app.use(logger('dev'));
app.set('view engine', 'ejs');

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

const DOMAIN = 'localhost';
const PORT = '8080';
app.listen(PORT, DOMAIN, () => {
   console.log(`🖥 Server listenning on http://${DOMAIN}:${PORT}`);
});