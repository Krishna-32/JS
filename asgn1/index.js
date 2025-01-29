// Import the fs module for file system operations
const fs = require('fs');

// Use the non-blocking fs.readFile function to read the file
fs.readFile('sample.txt', 'utf8', (err, data) => {
    if (err) {
        // Handle any errors that occur during file reading
        console.error('Error reading the file:', err);
        return;
    }
    // Output the file contents to the terminal
    console.log('File contents:');
    console.log(data);
});