const express = require('express');
const app = express();
const port = 8080;

// Middleware for parsing JSON bodies
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/proof.html');
});

app.get('/data', (req, res) => {
  res.sendFile(__dirname + '/proof.json');
});

app.post('/approve', (req, res) => {
  let rating = req.body.rating;

  // Check if rating is provided
  if (rating === undefined) {
    return res.status(400).send('Rating is required');
  }

  if (rating > 5 && rating <= 10) {
    res.send('approved');
  } else if (rating >= 1 && rating <= 5) {
    res.send('rejected');
  } else {
    res.status(400).send('Invalid rating value');
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
