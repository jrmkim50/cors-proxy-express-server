const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');

const app = express();
app.use(cors());

app.get('/getFile', async (req, res) => {
  const { fileurl } = req.query;
  fetch(fileurl).then(response => response.buffer()).then(buff => {
    res.end(buff);
  });
});

app.listen('9000');
