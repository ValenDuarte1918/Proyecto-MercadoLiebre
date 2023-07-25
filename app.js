const express = require("express")
const app = express()
const path = require("path")
app.use(express.static("Public"))

app.listen(process.env.PORT || 3000, function() {
  console.log("Servidor corriendo");
})
app.get("/", function(req,res){
    res.sendFile(path.join(__dirname, "Views/home.html"))
})
app.get("/register", function(req,res){
    res.sendFile(path.join(__dirname, "Views/register.html"))
})
app.get("/login", function(req,res){
    res.sendFile(path.join(__dirname, "Views/login.html"))
})