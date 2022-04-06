const User = require('../models/userModel');
const catchAsync = require('./../utils/catchAsync');
const jwt = require('jsonwebtoken');
const AppError = require('./../utils/appError');

// Helper method for signing JWT token
const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

/** SIGN-UP */
exports.signup = catchAsync(async (req, res, next) => {
  try {
    const newUser = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      passwordConfirm: req.body.passwordConfirm,
    });

    // GENERATE JWT TOKEN
    const token = signToken(newUser._id);

    res.status(201).json({
      status: 'success',
      token,
      data: {
        user: newUser,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err.message,
    });
  }
});

/** LOG IN */
exports.login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  // Check if email and password parameters were provided
  if (!email || !password) {
    next(new AppError('Please provide email and password!', 400));
  }

  // Check if the user exists. Then compare passwords to validate user.
  const user = await User.findOne({ email: email }).select('+password'); // user + encrypted pwd

  // If user doesn't exist or the passwords do not match, return error
  if (!user || !(await user.correctPassword(password, user.password))) {
    return next(new AppError('Incorrect email or password', 401));
  }

  // If all checks out, sign token and send to client
  const token = signToken(user._id);
  res.status(200).json({
    status: 'success',
    token,
  });
});
