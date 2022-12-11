import jwt from 'jsonwebtoken';

/**
 * Generate a json web token for a user
 * @param {string} id The id of the user
 * @param {string} expries time expries of token
 * @param {string} secretKey secretKey
 * @returns The JSON Web Token string
 */
export const generateToken = (id: string, expries: string, secretKey: string) => {
    const payload = { id }
	const options = { expiresIn: expries }
	const token = jwt.sign(payload, secretKey, options)
	return token
};
