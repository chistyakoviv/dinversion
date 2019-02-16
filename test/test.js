const assert = require('assert');
const chai = require('chai');
const Container = require('../dist/container').default;

describe('Container', function() {

    describe('#get', function() {
        const serviceObject = {
            name: 'service',
            method() {
                console.log('message');
            }
        };
        const container = new Container({
            serviceObject: function(container) {
                return serviceObject;
            },
            serviceObjectWithProp: function(container) {
                return {
                    prop: container.get('serviceObject')
                };
            },
            config: {
                string: 'str',
                bool: true
            }
        });

        it('should return an object', function() {
            chai.assert.isObject(container.get('serviceObject'));
        });

        it('should return an object with a property set from the container', function() {
            chai.assert.deepEqual(container.get('serviceObjectWithProp'), {prop: serviceObject});
        });

        it('should return a string', function() {
            chai.assert.strictEqual(container.get('config')['string'], 'str');
        });

        it('should return a boolean', function() {
            chai.assert.isBoolean(container.get('config')['bool']);
        });
    });

    describe('#set', function() {
        const container = new Container();
        const service = {
            name: 'eventDispatcher',
            dispatch() {
                return 'dispatched';
            }
        };

        container.set('service', service);

        it('should return the defined service from the container', function() {
            chai.assert.deepEqual(container.get('service'), service);
        });
    });

    describe('#has', function() {
        const container = new Container({
            service: {
                name: 'eventDispatcher'
            }
        });

        it('should return that the service exist', function() {
            chai.assert.strictEqual(container.has('service'), true);
        });

        it('should return that the service does not exist', function() {
            chai.assert.strictEqual(container.has('wrongService'), false);
        });
    });

});
