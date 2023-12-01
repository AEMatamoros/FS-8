const dotenv = require('dotenv');
// console.log(typeof process.env.NODE_ENV);
// console.log(process.env.NODE_ENV);

let mode = process.env.NODE_ENV;
if (mode.trim().toLocaleLowerCase() === 'production') {
  dotenv.config({ path: '.env.production' });
} else {
  dotenv.config({ path: '.env.development' });
}

const express = require('express');
const path = require('path');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
const connectToDb = require('./db/config');
const appRouter = require('./routes/app.routes');
const handleError = require('./midlewares/handleError');
connectToDb();

app.use(morgan('combined'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/images', express.static(path.join(__dirname, 'files')));

app.use('/api', appRouter);

app.get('/', (req, res) => {
  res.send('Bienvenido al API Calendar');
});

app.use(handleError);

app.listen(process.env.PORT, () => {
  console.log(`http://localhost:${process.env.PORT}`);
});

module.exports = app;
