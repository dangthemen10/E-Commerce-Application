'use-strict'

import {Request, Response, NextFunction} from 'express'
import logger from "../lib/logger"
import { validationResult } from 'express-validator'
const ERROR_404 = { message: 'Not Found' }

/**
 * Not Found Error
 * https://github.com/mwanago/express-typescript/tree/master/src/exceptions
 * https://gorrion.io/blog/node-express-js-typescript-sequelize/
 * https://github.com/AhmedKhames/E-Commerce-Api
 * https://github.com/rodolfo-santos/ecommerce-nuxt-template/tree/master/src/services/utils
 * https://github.com/MuratKaracaa/ecommerce-backend-typescript-nodejs-mongodb/tree/main/src/middlewares
 * https://github.com/djilousp/e-commerce-typescript/tree/master/src
 * https://github.com/leoantony72/E-commerce-Api/blob/master/src/middlewares/errhandler.ts
 * https://github.com/RdotSilva/TypeScript-MERN-Ecommerce/blob/main/backend/middleware/errorMiddleware.ts
 * @param {*} req
 * @param {*} res
 * @param {*} next
 * @returns
 */
const notFoundError = (req: Request, res: Response, next: NextFunction) => {
	logger.info(`404 method: ${req.method} url: ${req.originalUrl}`)
	return res.status(404).json(ERROR_404)
}
