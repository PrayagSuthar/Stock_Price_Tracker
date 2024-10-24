const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    watchlist: [String]  // Array of ticker symbols
});

module.exports = mongoose.model('User', userSchema);
