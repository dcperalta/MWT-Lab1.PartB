// use fs.readFile() to serve correct HTML pages on /, /about, and /contact
// Return 404 page for unknown routes
// log incoming requests using console.log(req.url)
// set correct content types using res.setHeader()
// test routes in browser and postman
// push the project to GitHub and submit the link 
// add a basic style.css file and serve it using another fs.readFile() call when the user accesses /style.css. link to HTML files

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log(req.url);
    console.log(req.method);

    if (req.url === '/') {
        fs.readFile('./index.html', (err, data) => {
            if (err) {
                console.log(`Error loading page`);
            } else {
                res.setHeader('Content-Type', 'text/html');
                res.end(data);
            }
        });
    } else if (req.url === '/about') {
        fs.readFile('./about.html', (err, data) => {
            if (err) {
                console.log(`Error loading page`);
            } else {
                res.setHeader('Content-Type', 'text/html');
                res.end(data);
            }
        });
    } else if (req.url === '/contact') {
        fs.readFile('./contact.html', (err, data) => {
            if (err) {
                console.log(`Error loading page`);
            } else {
                res.setHeader('Content-Type', 'text/html');
                res.end(data);
            }
        });
    } else if (req.url === '/style.css') {
        fs.readFile('./style.css', (err, data) => {
            if (err) {
                console.log(`Error loading page`);
            } else {
                res.setHeader('Content-Type', 'text/css');
                res.end(data);
            }
        });
    } else {
        console.log(`Page not found`);
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/html');
        res.end('<h1>404 - Page Not Found</h1>');
    }
});

server.listen(3000, () => {
    console.log('Server is listening on port 3000');
});
