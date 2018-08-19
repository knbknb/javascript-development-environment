import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression'; // gzip in express

// no webpack and babel code in here

/*eslint-disable no-console */

const port = 3000;
const app = express();

// express web framework
app.use(express.static('dist'));
app.use(compression());

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open(`http://localhost:${port}`);
  }
});
