const http = require('http');


const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-type': 'application/json' });

    let salida = {
        nombre: 'fernando',
        edad: 32,
        url: req.url
    };

    res.write(JSON.stringify(salida));

    res.end();
});


server.listen(8000);

/*
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {

    //res.statusCode = 200;
    //res.setHeader('Content-Type', 'text/plain');
    //res.end('Hello World');

    let salida = {
        nombre: 'fernando ddd',
        edad: 32,
        url: req.url
    };
    res.writeHead(200, { 'Content-type': 'application/json' });
    res.write(JSON.stringify(salida));

    res.end();

});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

*/