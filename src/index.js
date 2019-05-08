const path = require('path');
const express = require('express');

const app = express();
const port = process.env.PORT;

// Define patsh for Express config
const publicDirectoryPath = path.join(__dirname, '../public');

// Setup static directory to serve
app.use(express.static(publicDirectoryPath));

app.listen(port, () => {
  console.log('Server is up on port ' + port + '.');
});