const { validateRequiredParameters } = require('../helpers/validation');

/** 
 * Broker Sub Account API Key CRUD endpoints
 * @module SubAccountAPI
 * @param {*} superclass
 */

const SubAccountAPI = (superclass) =>
	class extends superclass {
		/**
     * Create API Key for Sub Account
     * 
     * POST /api/v5/broker/nd/subaccount/apikey
     * 
     * @param {string} subAccountId
     * @param {string} label
     * @param {string} passphrase
     * @param {object} [options] 
     * @param {boolean} [options.marginTrade]
     * @param {boolean} [options.futuresTrade]
     * @param {number} [options.recvWindow] 
     */
		createAPIKeyForSubAccount(subAccountId, label, passphrase, options = {}) {
			validateRequiredParameters({ subAccountId, label, passphrase});
			return this.signRequest(
				'POST',
				'/api/v5/broker/nd/subaccount/apikey',
				Object.assign(options, {
					subAccountId,
					label,
                    passphrase,
				})
			);
		}

		/**
     * Delete Sub Account API Key
     * 
     * DELETE /api/v5/broker/nd/subaccount/delete-apikey
     * 
     * @param {string} subAccountId
     * @param {string} subAccountApiKey
     * @param {object} [options] 
     * @param {number} [options.recvWindow] 
     */
		deleteSubAccountAPIKey(subAccountId, subAccountApiKey, options = {}) {
			validateRequiredParameters({ subAccountId, subAccountApiKey });
			return this.signRequest(
				'POST',
				'/api/v5/broker/nd/subaccount/delete-apikey',
				Object.assign(options, {
					subAccountId,
					subAccountApiKey
				})
			);
		}

		/**
     * Query Sub Account API Key
     * 
     * GET /api/v5/broker/nd/subaccount/apikey
     * 
     * @param {string} subAccountId
     * @param {object} [options] 
     * @param {string} [options.subAccountApiKey]
     * @param {number} [options.page]
     * @param {number} [options.size]
     * @param {number} [options.recvWindow] 
     */
		getSubAccountAPIKey(subAccountId, options = {}) {
			validateRequiredParameters({ subAccountId });
			return this.signRequest(
				'GET',
				'/api/v5/broker/nd/subaccount/apikey',
				Object.assign(options, {
					subAccountId
				})
			);
		}

		/**
     * modify API key
     * 
     * POST /api/v5/broker/nd/subaccount/modify-apikey
     * 
     * @param {string} subAccountId
     * @param {string} subAccountApiKey
     * @param {string} label
     * @param {string} perm
     * @param {object} [options] 
     * @param {number} [options.recvWindow] 
     */
		modifyAPIkey(
			subAccountId,
			subAccountApiKey,
			label,
			perm,
			options = {}
		) {
			validateRequiredParameters({ subAccountId, subAccountApiKey, label, perm});
			return this.signRequest(
				'POST',
				'/api/v5/broker/nd/subaccount/modify-apikey',
				Object.assign(options, {
					subAccountId,
					subAccountApiKey,
					label,
					perm,
				})
			);
		}
	};

module.exports = SubAccountAPI;
