const express = require('express'); 
const app = express()

app.get('/', (req, res) => {
  res.send('hello world')
});

app.post('/new/user', (req, res) => {
    res.send('hello world')
  });

   app.patch('/user/:id', (req, res) => {
   
    res.json({message: 'hello world'});
    

  });

  app.delete('/user/:id', function (req, res) {
    res.send('hello world')
  });

  app.listen(3000, ()=> {
    console.log('example app listening on port 3000');
}) ;

const newUser = require('./controllers/users'); 

