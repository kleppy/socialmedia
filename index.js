const routes = require('./routes');
const db = require('./config/connection');
const express = require('express');

// PORT 3001 local
const PORT = process.env.port || 3001;
// app define 
const app = express();
// routes
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});
