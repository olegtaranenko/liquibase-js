require('../');
var should = require('should');

var instance = Ext.create('Liquibase.Liquibase');

require('mocha');

describe('Liquibase', function() {
  it('namespace should be defined', function(done) {

    should.exist(Liquibase);
    done();
  });

  it('instance should exists', function(done) {

    should.exist(instance);
    done();
  });


/*
  it('should create a liquibase instance', function(done) {
    instance = liquibase.getInstance({
      db: 'sqlite',
      url: 'test.db'
    });

    should.exist(instance);
    done();
  });


  it('global instance var should be inited before goes to next test', function(done) {
    should.exist(instance);
    done();
  });

  it('engine should exists', function(done) {
    var engine = instance.getEngine();
    should.exist(engine);
//     var initialized = engine.initialized();

//     (initialized).should.be.true();
    done();
  });

  it('engine should be initializable', function(done) {
    var engine = instance.getEngine();
    should.exist(engine.initialized);

    done();
  });

  it('engine should be initialized', function(done) {
    var engine = instance.getEngine();
    var initialized = engine.initialized();
    initialized.should.be.true();

    done();
  });
*/

/*
  it('try to connect', function(done) {
    instance.connect();

    done();
  });

  it('try to connect', function(done) {
    instance.connect();

    done();
  });
*/

});
