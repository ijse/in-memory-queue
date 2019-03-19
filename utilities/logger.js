'use strict';

const Winston = require('winston');

const DEBUG = (process.env.DEBUG || '').match(/in-memory-queue/)

const Logger = scope => {
    return new Winston.Logger({
        level: DEBUG ? 'info' : 'error',
        transports: [
            new (Winston.transports.Console)({
                timestamp: true,
                colorize: true,
                label: scope,
                prettyPrint: true
            })
        ]
    });
};

module.exports = Logger;
