const express = require('express');
const mongoose = require('mongoose');
var path = require('path');
var http = require('http');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// var index = require('./backend/routes/small-dog.route');
var smallDogsRoutes = require('./backend/routes/small-dog.route');

const app = express();

var connection = mongoose.connect(
    "mongodb+srv://ashleeb3:PdrA7NJuEnOexNeN@cluster0.3qq2dgp.mongodb.net/dogs?retryWrites=true&w=majority&appName=Cluster0"
).then(() => {
    console.log("Connected to the database!");
    app.listen(3000, () => {
        console.log("Server is running on port 3000");
      });
}).catch(() => {
    console.log("Connection failed.");
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cookieParser());

app.use(logger('dev'));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.setHeader(
      'Access-Control-Allow-Methods',
      'GET, POST, PATCH, PUT, DELETE, OPTIONS'
    );
    next();
});

app.use(express.static(path.join(__dirname, './dist/cms/browser')));

// app.use('/', index);
app.use('/small', smallDogsRoutes);

// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, './dist/cms/browser/'));
// });

const server = http.createServer(app);

module.exports = connection;
  