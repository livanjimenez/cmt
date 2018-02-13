//CMT - Cryptocurrency Market Tracker
const express = require('express');
const app = express();
global.fetch = require('node-fetch');


const port = process.env.PORT || 4000;

//Test for express API to be working
//http:localhost:4000/api/users
app.get('/api/express', (req, res) =>{
  
  res.send({
    express: 'Hello from express!'
  });
  
});

//Backend Express API
app.get('/api/cc', (req, res) =>{
  let url = 'https://api.coinmarketcap.com/v1/ticker/?limit=10';

  fetch(url)
    .then((res) =>{
      return res.json();     
    })
    .then((data) =>{
      return res.json(data); 
    })
    .catch((err) =>{
      console.log(err);
    })
  
});

app.get('/api/CryptoHistory', (req, res) =>{

  let url;

  //fetch(url)

});

app.get('/api/top100', (req, res) =>{
  let url = 'https://api.coinmarketcap.com/v1/ticker/?limit=100';

  fetch(url)
    .then(res => {
      return res.json();
    })
    .then(data => {
      return res.json(data);
    })
    .catch(err => {
      console.log(err);
    });

});

app.listen(port, () => console.log('listening on port 4000'));