"use strict";
const FastBootAppServer = require('fastboot-app-server');
// const CQExpressServer = require('./server.js');

// const httpServer = new CQExpressServer();

const server = new FastBootAppServer({
    // httpServer,
    distPath: 'dist',
    gzip: true // Optional - Enables gzip compression.
});


server.start();
