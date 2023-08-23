const express = require('express');

const port = 1245;
const host = '127.0.0.1';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.listen(port, host);
