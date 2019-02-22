const express = require('express');
const parser = require('body-parser');
const path = require('path');

const port = process.env.port || 8000;
const app = express();

require('./server/config/database');

app.use(parser.urlencoded({ extende: true }));
app.use(parser.json());
app.use(express.static('dist/public'));
app.use(require('./server/routes'));

app.listen(port, () => console.log(`express server listening on port ${port}`));
