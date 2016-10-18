const express = require('express');

const app = express();

 app.get('/', function(req, res) {
    res.sendfile('index.html');
 });

 app.use(express.static('./'));

 app.listen(5000, function() {
   console.log('Listening on 5000');
 });

