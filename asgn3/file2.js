// Import the Express module and file system module
const express = require('express');
const fs = require('fs');

// Create an instance of Express
const app = express();

// Define a route to display JSON data
app.get('/data', (req, res) => {
  // Read the JSON file
  fs.readFile('./data/data.json', 'utf8', (err, data) => {
    if (err) {
      return res.status(500).send('Error reading JSON file');
    }
    // Send the JSON data as a response
    res.send(JSON.parse(data));
  });
});

// Start the server on port 3000
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});