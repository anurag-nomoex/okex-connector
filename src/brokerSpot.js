const APIBase = require('./APIBase');
const modules = require('./modules');
const { flowRight } = require('./helpers/utils');

class BrokerSpot extends flowRight(...Object.values(modules))(APIBase) {
	constructor(apiKey = '', apiSecret = '', passphrase ='', options = {}) {
		options.baseURL = options.baseURL || 'https://www.okx.com';
		super({
			apiKey,
			apiSecret,
			passphrase,
			...options
		});
	}
}

module.exports = BrokerSpot;
