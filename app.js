const http = require('http');
const fs = require('fs');

const server = http.createServer((request, response) => {
    // console.log(request.url, request.method, request.headers);
    // process.exit();
    const url = request.url;
    const method = request.method;

    if (url === '/') {
        response.write('<html>');
        response.write('<head><title>Enter Message</title></head>');
        response.write('<body>');
        response.write('<form action="/message" method="POST">');
        response.write('<input type="text" name="message">');
        response.write('<button type="submit">Send</button>');
        response.write('</form>');
        response.write('</body>');
        response.write('</html>');
        return response.end();
    }

    if (url === '/message' && method === 'POST') {
        fs.writeFileSync('message.txt', 'DUMMY');
        response.statusCode = 302;
        response.setHeader('Location', '/');
        return response.end();
    }
    
    response.setHeader('Content-Type', 'text/html');
    response.write('<html>');
    response.write('<head><title>My First Page</title></head>');
    response.write('<body><h1>Hello from my Node.js Server!</h1></body>');
    response.write('</html>');
    response.end();
});

server.listen(3000);