const express = require('express');
const app = express();
import authentication from './authentication';
import items from './items';

// routes
app.use(authentication);
app.use(items);

module.exports = app