var http = require('http'),
    controllerMaster = require('./app/controllerMaster'),
    finalhandler = require('finalhandler'),
    routes = require('./app/routes'),
    router = require('router')(),
    config = require('./app/config');

//bind all get routes
routes.get.forEach(function(route){
    router.get(route.url, function (req, res) {
        controllerMaster.callFromRoute(route.controller, req, res);
    });
});

// bind all post routes
routes.post.forEach(function(route){
    router.post(route.url, function (req, res) {
        controllerMaster.callFromRoute(route.controller, req, res);
    });
});

http.createServer(function (req, res) {
    router(req, res, finalhandler(req, res))
}).listen(config.serverPort);
console.log('Node app listening on port ' + config.serverPort);