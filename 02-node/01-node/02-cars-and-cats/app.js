const fs = require('fs'),
    http = require('http'),
    port = 5050;

const server = http.createServer(function server(req, res){
  // Figure out which file the HTTP request is looking for
    let file;
    //const imgArray = ['car1.jpg', 'car2.jpg', 'car3.jpg', 'cat1.jpg', 'cat2.jpg', 'cat3.jpg', ]
    switch (req.url) {
        case "/cats":
            file = 'cats.html'
            break;
        case "/cars":
            file = 'cars.html'
            break;
        case "/cars/new":
            file = 'newcars.html'
            break;
        default:
            file = null;
            break;
    }

    if (file !== null) {
        fs.readFile(`views/${file}`, 'utf8', function(err, contents){
            if (err) { console.log(err); }
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(contents);
            res.end();
            });
    }
    // I want to figure out how to loop through the list of urls so I don't have to repeat this url/file location structure so much.

    /* else if( for(img in imgArray) {
        request.url === `/images/${img}`) {
            fs.readFile(`./images/${img}`, function(errors, contents){
                response.writeHead(200, {'Content-type': 'image/jpg'});
                response.write(contents);
                response.end();
            })
        } */
        else if (req.url === '/images/car1.jpg'){
        fs.readFile('./images/car1.jpg', function(errors, contents){
            res.writeHead(200, {'Content-type': 'image/jpg'});
            res.write(contents);
            res.end();
        })
    } else if (req.url === '/images/car2.jpg'){
        fs.readFile('./images/car2.jpg', function(errors, contents){
            res.writeHead(200, {'Content-type': 'image/jpg'});
            res.write(contents);
            res.end();
        })
    } else if (req.url === '/images/car3.jpg'){
        fs.readFile('./images/car3.jpg', function(errors, contents){
            res.writeHead(200, {'Content-type': 'image/jpg'});
            res.write(contents);
            res.end();
        })
    } else if (req.url === '/images/cat1.jpg'){
        fs.readFile('./images/cat1.jpg', function(errors, contents){
            res.writeHead(200, {'Content-type': 'image/jpg'});
            res.write(contents);
            res.end();
        })
    } else if (req.url === '/images/cat2.jpg'){
        fs.readFile('./images/cat2.jpg', function(errors, contents){
            res.writeHead(200, {'Content-type': 'image/jpg'});
            res.write(contents);
            res.end();
        })
    } else if (req.url === '/images/cat3.jpg'){
        fs.readFile('./images/cat3.jpg', function(errors, contents){
            res.writeHead(200, {'Content-type': 'image/jpg'});
            res.write(contents);
            res.end();
        })
    } else if (req.url === '/stylesheets/style.css') {
        fs.readFile('./stylesheets/style.css', 'utf8', function(errors, contents){
            res.writeHead(200, {'Content-type': 'text/css'});
            res.write(contents);
            res.end();
        })
    } else {
        res.writeHead(404);
        res.end();
    }
});

server.listen(port);