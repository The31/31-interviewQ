// import express from 'express';
// import path from 'path';

const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(__dirname + '/../client/dist'));


app.get('/', function(req, res) {
  res.send('SUP MATT');
});

app.listen(3000, () => {   
    console.log(`CONNECTED🤪`);
});
