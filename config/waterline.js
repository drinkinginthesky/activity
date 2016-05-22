var Waterline = require('waterline');
var mongoAdapt = require('sails-mongo');
var config = require('./config');
var topic = require('../app/Model/topic');
var tag = require('../app/Model/tag');
var reply = require('../app/Model/reply');
var orm = new Waterline();
var wlconfig = {
    adapters:{
        default:mongoAdapt,
        mongo:mongoAdapt
    },
    connections:{
        'mongo':{
            adapter:'mongo',
            url:config.mongoURI
        }
    }
}

orm.loadCollection(tag);
orm.loadCollection(topic);
orm.loadCollection(reply);
exports.orm = orm;
exports.config = wlconfig;