var storage = require('./storage');

module.exports = {
    callFromRoute: function(controllerRoute, req, res){
        var parts = controllerRoute.split('@');
        var controllerName = parts[0];
        var controllerMethod = parts[1];
        var controller = require('./' + controllerName);
        if(typeof controller[controllerMethod] != 'undefined'){
            controller[controllerMethod](req, res);
        }else{
            res.writeHead(500, {'Content-Type': 'text/html'});
            res.write('<!doctype html><html><head><title>response</title></head><body>');
            res.write('Sorry an internal server error occurred');
            res.end('</body></html>');
        }
    }
};