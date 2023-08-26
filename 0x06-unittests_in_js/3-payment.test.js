const sinon = require('sinon');
const assert = require('assert')
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
  it('validate the usage of the Utils function', () => {
    const spy = sinon.spy(Utils, 'calculateNumber');

    sendPaymentRequestToApi(100, 20);

    assert.calledOnce(spy.calledOnce);

    spy.restore();
  });
});