const express=require('express')
const isAuth=require("./middlewares/isAuth")
const app=express();

app.get("/",isAuth, (req, res) => {
    res.sendFile("./public/home.html",{root:__dirname})
})
//app.use(isAuth)
app.get("/about", (req, res) => {
    res.sendFile("./public/about.html",{root:__dirname})
})
app.get("/style.css",(req,res)=>{
    res.sendFile("./public/style.css",{root:__dirname})
})

const port =process.env.PORT||5000
app.listen(port,(err)=>{
    err?console.log(err):console.log(`server is running at port ${port}`)
})