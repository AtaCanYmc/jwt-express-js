const mongoose = require('mongoose');
const { profileSchema} = require('./Profile');

const userSchema = new mongoose.Schema({
    username: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    isAdmin: { type: Boolean, default: false },
    profile: profileSchema
});

userSchema.methods.toJSON = function() {
    const user = this;
    const userObject = user.toObject();

    delete userObject.password;

    return userObject;
};

userSchema.pre('save', (next) => {
    this.updatedAt = Date.now();
    next();
});

module.exports = mongoose.model('User', userSchema);