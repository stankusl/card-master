// Server Configuration for Node Server. 
var express = require('express');
var server = express();
server.use('/', express.static(__dirname + '/build'));
server.listen(888);

