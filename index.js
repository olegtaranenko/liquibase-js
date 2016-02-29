require('insistent-js');

Ext.Loader.setPath('Liquibase', __dirname + '/lib/Liquibase');

/*
var Liquibase = require('./lib/Liquibase');

module.exports = {
    Liquibase: Liquibase,

    getInstance: function(config) {
        var instance = new Liquibase(config);

        return instance;
    }
};
*/
