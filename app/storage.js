var fs = require('fs'),
    lowdb = require('lowdb'),
    uuid = require('uuid');

module.exports = {
    save: function(tablename, data){
        var db = this.getDBInstance(tablename);

        var dataToSave = {
            id: uuid(),
            message: data
        };

        db.get('messages')
            .push(dataToSave)
            .value();

        return dataToSave;
    },
    all: function(tablename){
        var db = this.getDBInstance(tablename);
        return db.get(tablename).value();
    },
    fetch: function(tablename, id){
        var db = this.getDBInstance(tablename);
        var value = db.get(tablename).find({ 'id': id }).value();
        return value;
    },
    getDBInstance: function(tablename){
        var saveFile = './storage/' + tablename + '.json',
            db = lowdb(saveFile);

        db.defaults({ messages: [] })
            .value();

        return db;
    }
};