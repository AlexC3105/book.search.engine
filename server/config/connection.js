const mongoose = require('mongoose');

const connection = mongoose.createConnection(process.env.MONGODB_URI || 'mongodb://localhost/googlebooks');

module.exports = connection;
