const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide your name.'],
  },
  email: {
    type: String,
    required: [true, 'A user must have an email'],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, 'Please provide a valid email.'],
  },
  password: {
    type: String,
    required: [true, 'Please provide a password'],
    minlength: 8,
    select: false,
  },
  passwordConfirm: {
    type: String,
    required: [true, 'Please confirm your password'],
    validate: {
      // This only works on CREATE and SAVE!!
      validator: function (el) {
        console.log(el, this.password);
        return el === this.password;
      },
      message: 'Passwords are not the same!',
    },
  },
  passwordChangedAt: Date,
  createdAt: {
    type: Date,
    default: Date.now(),
    select: false,
  },
});

// Password Encryption:
// Between getting data and saving it, run this only if password has been modified (user create/save):
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();

  // hash password with a cost of 12 (no higher. CPU intensive)
  this.password = await bcrypt.hash(this.password, 12);
  this.passwordConfirm = undefined;
});

// Password comparison method on userSchema. Can be used on user queries...
// (see Line 49 in ../controllers/authController.js)
userSchema.methods.correctPassword = async function (
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

userSchema.methods.changedPasswordAfter = function (JWTTimestamp) {
  if (this.passwordChangedAt) {
    const changedTimestamp = parseInt(this.passwordChangedAt.getTime() / 1000, 10);

    return JWTTimestamp < changedTimestamp; // true if pwd was changed
  }

  // default false if pwd not changed
  return false;
};

// Assign schema to User & export
const User = mongoose.model('User', userSchema);
module.exports = User;
