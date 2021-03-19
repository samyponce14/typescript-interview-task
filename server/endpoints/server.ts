const express = require('express');
const app = express();
import authentication from './authentication';
import items from './items';

var server = app.listen(3000);
// routes
app.use(authentication);
app.use(items);

module.exports = { app, server }