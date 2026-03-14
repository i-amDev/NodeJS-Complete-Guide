// const http = require('http');

const express = require('express');

const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin');

// app.use((request, response, next) => {
//     // console.log('In the middelware!');
//     next(); // Allow the request to continue to the next middleware in line.
// });

app.use(bodyParser.urlencoded({extended: false}));

app.use(adminRoutes);

app.use('/' ,(request, response, next) => {
    // console.log('In another middelware!');
    response.send('<h1>Hello from Express!</h1>');
});

// const server = http.createServer(app);

// server.listen(3000);

app.listen(3000);