const { validateRequiredParameters } = require('../helpers/validation');

/** 
 * API Broker Sub Account endpoints
 * @module SubAccount
 * @param {*} superclass
 */

const SubAccount = (superclass) =>
	class extends superclass {
		/**
     * Create a Sub Account under Broker account<br>
     * 
     * POST /api/v5/broker/nd/create-subaccount<br>
     * 
     * 
     * @param {object} [options] 
     * @param {string} [options.tag] 
     * @param {number} [options.recvWindow]
     */
		createSubAccount(options = {}) {
			return this.signRequest('POST', '/api/v5/broker/nd/create-subaccount', options);
		}

		/** 
     * Get Sub Account
     * 
     * GET /api/v5/broker/nd/subaccount-info
     * 
     * @param {object} [options]
     * @param {string} [options.subAccountId]
     * @param {number} [options.page]
     * @param {number} [options.size]
     * @param {number} [options.recvWindow] 
     */
		getSubAccount(options = {}) {
			return this.signRequest('GET', '/api/v5/broker/nd/subaccount-info', options);
		}
	};

module.exports = SubAccount;
