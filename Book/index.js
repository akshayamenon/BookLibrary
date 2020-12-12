const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());



app.get('/', function (req, res) {
    res.send('Books index page');
  });
      

app.get('/add', (req, res) => {
   
    res.render('add.ejs');
});
app.get('/delete', (req, res) => {
    res.send("You can add your book here");
    res.render('delete.ejs');
});




app.listen(PORT, () => console.log(`Book Service listening on ${PORT}`));