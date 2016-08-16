var request = require('request'),
    config = require('../../app/config'),
    chai = require('chai');
    expect = chai.expect,
    storage = require('../../app/storage'),
    uuid = require('uuid');


describe('MessageController', function() {

    describe('#api', function() {
        it('should retrieve object via get request with ID param', function (done) {

            var messagesStored = storage.all('messages');
            if(messagesStored.length == 0){//if nothing to retrieve we need to add something
                storage.save('messages', 'test message');
            }
            messagesStored = storage.all('messages');

            var lastMessageEntered = messagesStored[messagesStored.length -1];

            request.get('http://localhost:' + config.serverPort + '/messages/' + lastMessageEntered.id, function (err, res, body) {
                expect(res.statusCode).to.equal(200);
                expect(JSON.parse(body).message).to.equal(lastMessageEntered.message);
                expect(JSON.parse(body).message).to.equal(lastMessageEntered.message);
                done();
            });
        });

        it('should save object via post request', function (done) {
            request.post('http://localhost:' + config.serverPort + '/messages/', {
                    message: 'Test message'
                }, function (err, res, body) {
                    var messagesStored = storage.all('messages');
                    var lastMessageEntered = messagesStored[messagesStored.length - 1];

                    request.get('http://localhost:' + config.serverPort + '/messages/' + lastMessageEntered.id, function (err, res, body) {
                        expect(res.statusCode).to.equal(200);
                        expect(JSON.parse(res.body).message).to.equal(lastMessageEntered.message);
                        done();
                    });
                });
        });
    });
});