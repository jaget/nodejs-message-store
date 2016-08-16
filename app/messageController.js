var storage = require('./storage'),
    qs = require('querystring');

module.exports = {
    show: function(req, res){
        var id = req.params.id;
        res.setHeader('Content-Type', 'application/json');
        res.write(JSON.stringify(storage.fetch('messages', id)));
        res.end();
    },
    save: function(req, res){
        var body = '';
        req.on('data', function (data) {
            body += data;
        });
        req.on('end', function () {
            var $_POST = qs.parse(body);
            var savedEntry = storage.save('messages', $_POST.message);
            res.setHeader('Content-Type', 'application/json');
            res.write(JSON.stringify(savedEntry));
            res.end();
        });
    }
};