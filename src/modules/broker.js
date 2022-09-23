const { validateRequiredParameters } = require('../helpers/validation');

/**
 * API broker endpoints
 * @module Broker
 * @param {*} superclass
 */
const Broker = (superclass) =>
	class extends superclass {
		/**
     * Get Broker Info<br>
     *
     * GET /api/v5/broker/nd/info<br>
     *
     * @param {object} [options]
     */
		brokerInfo(options = {}) {
			return this.signRequest('GET', '/api/v5/broker/nd/info', options);
		}
	};

module.exports = Broker;
