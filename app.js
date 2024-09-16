const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Welcome to Canada! But I want to welcome you to Australia as well'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
