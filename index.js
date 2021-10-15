const express = require('express');
const path = require('path');

const app = express();

// Make all fies in "public" folder accessible
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(3000, () => {
  console.log('server started');
});