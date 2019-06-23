require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const homeRoute = require('./routes/homeRoute');
const statesRoute = require('./routes/statesRoute');
const citiesroute = require('./routes/citiesRoute');

const app = express();
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true });
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors());
app.use('/', homeRoute);
app.use('/states', statesRoute);
app.use('/cities', citiesroute);

app.listen(process.env.PORT || 3000, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});
