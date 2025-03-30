const express = require('express');
const app = express();
const path = require('path');
const beyblades = require('./data/blades.json');

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Beyblade API endpoint
app.get('/api/beyblades', (req, res) => {
    res.json(beyblades);
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Beyblade Arena ready at http://localhost:${PORT}`);
});