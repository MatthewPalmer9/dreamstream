const catchAsync = require('../utils/catchAsync');
const fs = require('fs');

exports.getVideo = (req, res) => {
  const film = req.url.split('/')[1];
  const range = req.headers.range;
  if (!range) {
    res.status(400).send('Requires Range header');
  }

  if (fs.existsSync(`videos/${film}.mp4`)) {
    const videoPath = `videos/${film}.mp4`;
    const videoSize = fs.statSync(videoPath).size;
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
  }
};
