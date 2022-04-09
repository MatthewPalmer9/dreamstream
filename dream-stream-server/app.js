const express = require('express');
const userRouter = require('./routes/userRoutes');
const videoRouter = require('./routes/videoRouter');
const cors = require('cors');
const app = express();

// for console color coding of HTTP requests
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send(200, 'Success!');
});

app.use('/api/v1/videos', videoRouter);
app.use('/api/v1/users', userRouter);

module.exports = app;
