// Importing required modules using ES Modules syntax
import express from 'express';
import morgan from 'morgan';

// Creating an instance of express
const app = express();

// Using morgan middleware to log HTTP requests
app.use(morgan('combined'));

// Define a route for the root of your website
app.get('/', (req, res) => {
    res.send('Hello World! This is my Express server.');
});

// Define the port number
const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
