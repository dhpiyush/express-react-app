const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');
const app = express();
const router = express.Router();
const config = require('config');

const dataRouter = require('./routes/data_modify');
const API_PORT = config.get('API_PORT');

app.use(cors());
// (optional) only made for logging and
// bodyParser, parses the request body to be a readable json format
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger("dev"));

// append /api for our http requests
app.use("/api", dataRouter);

// launch our backend into a port
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));