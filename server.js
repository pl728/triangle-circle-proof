const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/proof.html');
});

app.get('/data', (req, res) => {
  res.sendFile(__dirname + '/proof.json');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
