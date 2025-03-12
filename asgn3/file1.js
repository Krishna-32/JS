// Import the Express module
const express = require('express');

// Create an instance of Express
const app = express();

// Define a route for the home page
app.get('/', (req, res) => {
  // Send a response with your group names
  res.send('<h1>Group Members:</h1><ul><li>Krishna</li><li>Kritan</li><li>Jasan</li></ul>');
});

// Start the server on port 3000
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});