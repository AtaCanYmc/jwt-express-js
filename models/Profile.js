const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    bio: String,
    birthdate: Date
});

module.exports = {
    profileSchema: profileSchema
};