const express = require('express');

const app = express();

const fs = require('fs')

app.get('/',(req,res)=>{
  fs.readFile('./db.json', (err,data)=>{
    const warriors = data.toString();
    res.send(warriors);
  })
})           

app.listen(process.env.PORT || 3000);