'use-strict'

import winston from 'winston'
import moment from 'moment-timezone'
moment.tz.setDefault('Asia/Ho_Chi_Minh')

//
// Logging levels
//
const config = {
	levels: {
		error: 0,
		debug: 1,
		warn: 2,
		data: 3,
		info: 4,
		verbose: 5,
		silly: 6,
		custom: 7,
	},
	colors: {
		error: 'red',
		debug: 'blue',
		warn: 'yellow',
		data: 'grey',
		info: 'green',
		verbose: 'cyan',
		silly: 'magenta',
		custom: 'yellow',
	},
}
winston.addColors(config.colors)

const logger = winston.createLogger({
	levels: config.levels,
	format: winston.format.combine(
		winston.format.colorize(),
		winston.format.timestamp({
			format: 'YYYY-MM-DD HH:mm:ss',
		}),
		winston.format.simple()
	),
	transports: [
		new winston.transports.File({
			filename: `./logs/log_date_${moment(new Date()).format('YYYYMMDD')}.log`,
		}),
	],
})

export default logger
