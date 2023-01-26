const express = require("express");
const app = express()
const port = 3000

app.get("/", (req, res)=>{
  res.send("Usando res.send")
})

app.listen(port, ()=>{
  console.log("mi puerto es"+port)
})
