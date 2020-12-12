
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', function (req, res) {
    res.send('Customer Index page');
  });
      
  app.get('/add', function (req, res) {
    res.render('add.ejs');
  });  
  app.get('/delete', function (req, res) {
    res.render('delete.ejs');
  });

  app.listen(PORT, () => console.log(`Customer Service listening on ${PORT}`));