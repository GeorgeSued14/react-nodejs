const express = require('express');
const users = require('./data');
const cors = require('cors')

const app = express();
app.use(cors());

// Constants
const PORT = 3000;
const HOST = '0.0.0.0';

// App
app.get('/users', (req, res) => {
  res.send(JSON.stringify(users));
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);