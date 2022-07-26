const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');

const app = express();
app.use(cors());

app.get('/', (req, res) => {
  res.send("This server proxies requests, so there is no need to look into cors.");
})

app.get('/getFile', async (req, res) => {
  const { fileurl } = req.query;
  fetch(fileurl).then(response => response.buffer()).then(buff => {
    res.end(buff);
  });
});

const PORT = process.env.PORT || 8080;

app.listen(PORT);
