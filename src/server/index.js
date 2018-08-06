// import express from 'express';
// import path from 'path';

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

app.use(express.static(path.resolve(__dirname, '..', '..', 'dist')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// app.get('/', function(req, res) {
//   res.sendFile( path.resolve('./dist/index.html') );
// });

app.listen(3000, () => {   
    console.log(`CONNECTED🤪`);
});


