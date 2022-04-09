class AppError extends Error {
  constructor(message, statusCode, res) {
    super(message);

    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
    this.isOperational = true;
    this.res = res;

    Error.captureStackTrace(this, this.constructor);
    
    res.status(this.statusCode).json({
      status: this.statusCode,
      error: message
    })
  }

}

module.exports = AppError;
