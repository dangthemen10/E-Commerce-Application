'use-strict'

import bcryptjs from 'bcryptjs'
import logger from './logger'

const SALT_ROUNDS = 10
/**
 * Auto-gen a salt and hash
 * bcrypt is a combination of hashing, salting and catching.
 * The salt is a random string of characters, attached to the password
 * Stretching is a method of complicating the hash value and increasing the computation time for decryption
 *
 * @param {string} myPlaintextPassword
 * @returns myPlaintextPassword hash
 */
const hashPassword = async (myPlaintextPassword: string) => {
    try {
        logger.info(`Start hash password: ${myPlaintextPassword}`)
        const salt = await bcryptjs.genSalt(SALT_ROUNDS)
        logger.info(`Salt: ${salt}`)
        return await bcryptjs.hash(myPlaintextPassword, salt)
    } catch (error) {
        logger.warn(`PasswordLib:hashPassword: hashPassword error: ${JSON.stringify(error)}`)
    }
    
}

/**
 * Verify password with database
 *
 * @param {string} passwordRequest
 * @param {string} passwordDB
 * @returns true if password is exist in database
 */
const isPasswordExist = async (passwordRequest: string, passwordDB: string) => {
    try {
        logger.info(`Start verify password: ${passwordRequest}`)
        const isPasswordExist = await bcryptjs.compare(passwordRequest, passwordDB)
        logger.info(`Verify password: ${isPasswordExist}`)
        return isPasswordExist
    } catch (error) {
        logger.warn(`PasswordLib:isPasswordExist: isPasswordExist error: ${JSON.stringify(error)}`)
    }
}

module.exports = {
	hashPassword,
	isPasswordExist,
}
