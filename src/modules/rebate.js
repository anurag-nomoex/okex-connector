const { validateRequiredParameters } = require('../helpers/validation');

/** 
 * Broker Commission Rebate endpoints
 * @module Rebate
 * @param {*} superclass
 */

const Rebate = (superclass) =>
	class extends superclass {
		/**
     * Get Broker Commission Rebate Recent Record（Spot）
     * only gets the latest history of past 7 days
     * 
     * GET /api/v5/broker/nd/rebate-daily
     * 
     * 
     * @param {string} subAccountId
     * @param {number} startTime        //in epoch millis
     * @param {number} endTime          //in epoch millis
     * @param {object} [options] 
     * @param {number} [options.page]   //default = 1
     * @param {number} [options.size]   //default = 500, max = 500
     * @param {number} [options.recvWindow]
     */
		getBrokerCommissionRebateRecentRecord(subAccountId, startTime, endTime, options = {}) {
			validateRequiredParameters({ subAccountId, startTime, endTime });
			return this.signRequest(
				'GET',
				'/api/v5/broker/nd/rebate-daily',
				Object.assign(options, {
					subAccountId,
					startTime,
					endTime
				})
			);
		}
	};

module.exports = Rebate;
