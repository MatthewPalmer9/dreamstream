const express = require('express');
const fs = require('fs');
const app = express();

// for console color coding of HTTP requests
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());
app.use(express.static(__dirname));

app.get('/', (req, res) => {
  res.send(200, 'Success!');
});

app.get('/video/big-buck', (req, res) => {
  const range = req.headers.range;
  if (!range) {
    res.status(400).send('Requires Range header');
  }

  const videoPath = 'videos/bigbuck.mp4';
  const videoSize = fs.statSync('videos/bigbuck.mp4').size;

  const CHUNK_SIZE = 10 ** 6; // 1MB

  // replace non-digit characters with ""
  const start = Number(range.replace(/\D/g, ''));
  const end = Math.min(start + CHUNK_SIZE, videoSize - 1); // videoSize - 1 so that we can't go past it

  const contentLength = end - start + 1;

  const headers = {
    'Content-Range': `bytes ${start}-${end}/${videoSize}`,
    'Accept-Ranges': 'bytes',
    'Content-Length': contentLength,
    'Content-Type': 'video/mp4',
    Custom: start,
  };

  res.writeHead(206, headers); // just response headers

  const videoStream = fs.createReadStream(videoPath, { start, end });

  videoStream.pipe(res);
});

app.listen(3000, () => {
  console.log('Listening on port 3000...');
});
