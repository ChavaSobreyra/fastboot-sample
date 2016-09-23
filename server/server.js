"use strict";
const config = require('./config');
const express = require('express');
const cookieParser = require('cookie-parser');

const ExpressHTTPServer = require('fastboot-app-server/src/express-http-server');
const tokenMiddleware = require('./middlewares/session-token');

// SETUP LOGGING
// Winston Logs to both stackify and console
const winston = require('winston');
const stackify = require('stackify-logger');

stackify.start({ apiKey: config.stackify.apiKey, env: 'dev' });
require('winston-stackify').Stackify;
winston.add(winston.transports.Stackify, { storage: stackify });

class CQExpressServer extends ExpressHTTPServer {
    serve(fastbootMiddleware) {
        let app = this.app;

        // Use request cookie parser
        app.use(cookieParser());



        if (this.distPath) {
            app.get('/', fastbootMiddleware);
            app.use(express.static(this.distPath));
        }

        app.get('/*', fastbootMiddleware);

        return new Promise(resolve => {
            let listener = app.listen(process.env.PORT || 3000, () => {
                let host = listener.address().address;
                let port = listener.address().port;

                this.ui.writeLine('HTTP server started; url=http://%s:%s', host, port);

                resolve();
            });
        });
    }
}


module.exports = CQExpressServer;
