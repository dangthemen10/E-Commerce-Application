'use-strict'

import {STATUS_CODE} from './constant'
/**
 * Exception custom 
 * @param {string|number} code 
 * @param {object} detail 
 * @returns object information error
 */
export const exception = (code: string | number, detail: object) => {
	return {
        code,
        detail
    }
}

const notFoundException = (detail: object) => exception(STATUS_CODE.NOT_FOUND, detail)

const badRequestException = (detail: object) => exception(STATUS_CODE.BAD_REQUEST, detail)

const unauthorizedException = (detail: object) => exception(STATUS_CODE.UNAUTHORIZED, detail)

const forbiddenException = (detail: object) => exception(STATUS_CODE.FORBIDDEN, detail)

module.exports = {
	exception,
	notFoundException,
	badRequestException,
	unauthorizedException,
	forbiddenException,
}
