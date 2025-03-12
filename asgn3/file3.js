// Import the Express module and file system module
const express = require('express');
const fs = require('fs');

// Create an instance of Express
const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Load JSON data
let data = require('./data/data.json');

// 1. READ (GET) - Retrieve all items
app.get('/data', (req, res) => {
  res.json(data);
});

// 2. CREATE (POST) - Add a new item
app.post('/data', (req, res) => {
  const newItem = req.body;
  data.push(newItem);
  fs.writeFile('./data/data.json', JSON.stringify(data), (err) => {
    if (err) {
      return res.status(500).send('Error writing to JSON file');
    }
    res.status(201).send('Item added successfully');
  });
});

// 3. UPDATE (PUT) - Update an existing item by ID
app.put('/data/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const updatedItem = req.body;
  const index = data.findIndex(item => item.id === id);
  if (index === -1) {
    return res.status(404).send('Item not found');
  }
  data[index] = { ...data[index], ...updatedItem };
  fs.writeFile('./data/data.json', JSON.stringify(data), (err) => {
    if (err) {
      return res.status(500).send('Error writing to JSON file');
    }
    res.send('Item updated successfully');
  });
});

// 4. DELETE (DELETE) - Delete an item by ID
app.delete('/data/:id', (req, res) => {
  const id = parseInt(req.params.id);
  data = data.filter(item => item.id !== id);
  fs.writeFile('./data/data.json', JSON.stringify(data), (err) => {
    if (err) {
      return res.status(500).send('Error writing to JSON file');
    }
    res.send('Item deleted successfully');
  });
});

// Start the server on port 3000
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});