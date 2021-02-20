const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.use('/login', (req, res) => {
  res.send({
    token: 'test123',
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, (err) => {
  if (err) {
    throw Error(err);
  }
  console.log(`Server has started on port ${PORT}`);
});
