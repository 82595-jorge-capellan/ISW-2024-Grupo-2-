const express = require('express');
const bodyParser = require('body-parser');
const emailRoutes = require('./routes/emailRoutes');

const app = express();
const port = 34500;

app.use(bodyParser.json());
app.use('/api', emailRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});