const env = require('./environment');
const mongoose = require('mongoose');

mongoose.connect(`mongodb://127.0.0.1/${env.db}`);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error connecting to MongoDB : '));

db.once('open', ()=>{
    console.log('Connected to db: MongoDB !!!');
})

module.exports = db;