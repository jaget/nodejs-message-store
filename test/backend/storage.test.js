var chai = require('chai'),
    expect = chai.expect,
    uuid = require('uuid');
var storage = require('../../app/storage');

describe('Storage', function() {
    it('Should save data', function(){
        var testText = 'test message';
        storage.save('messages', testText);
        var currentData = storage.all('messages'),
            lastRecordEntered = currentData[currentData.length -1];

        expect(lastRecordEntered).to.be.a('object');
        expect(lastRecordEntered.message).to.equal(testText);

    });
    it('Should retrieve data by ID field', function(){
        var chosenText = 'test message fetch by id';
        var testMessage = storage.save('messages', 'lorem ipsum');
        for(var count = 0; count < 10; count++){
            storage.save('messages', chosenText);
        }
        var messageWeWant = storage.fetch('messages', testMessage.id);

        expect(messageWeWant.id).to.equal(testMessage.id);
        expect(messageWeWant.message).to.equal(testMessage.message);
    });
});