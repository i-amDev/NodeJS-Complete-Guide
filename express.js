// const http = require('http');

const express = require('express');

const app = express();

app.use((request, response, next) => {
    console.log('In the middelware!');
    next(); // Allow the request to continue to the next middleware in line.
});

app.use('/add-product' ,(request, response, next) => {
    console.log('In middelware!');
    response.send('<h1>The "add product" Page!</h1>');
});

app.use('/' ,(request, response, next) => {
    console.log('In another middelware!');
    response.send('<h1>Hello from Express!</h1>');
});

// const server = http.createServer(app);

// server.listen(3000);

app.listen(3000);