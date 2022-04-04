const User = require('../models/userModel');
const catchAsync = require('../utils/catchAsync');

// CREATE USER / SIGN UP LOGIC
exports.createUser = catchAsync(async (req, res) => {
  try {
    const newUser = await User.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        user: newUser,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail', 
      message: err,
    });
  }
});
