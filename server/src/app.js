const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors());

app.post('/register', (req, res) => {
  res.send(`${req.body.email} was registered! have fun`)
})

app.listen(process.env.PORT || 8081, () => {
  console.log('server listening on 8081')
})