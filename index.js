const express = require('express');
const app = express();
const router = express.Router(); // Define and initialize router

app.use(express.static('public')); // Serve static files from 'public' directory

// Define routes using the router object
router.get('/', (req, res) => {
    res.sendFile('index.html', { root: './public' });
});

router.get('/hello', (req, res) => {
    res.sendFile('hello.html', { root: './public' });
});

// Use the router middleware in your Express app
app.use(router);

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

// Export the Express API
module.exports = app;