import express from 'express';
import bodyParser from 'body-parser';
import authentication from './authentication';
import items from './items';

const app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

// routes
app.use(authentication);
app.use(items);

export default app;