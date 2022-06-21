const express = require('express')
const app = express();
app.use(express.json())
let products = [{ name: "Dell", price: 2500, id: 0 }, { name: "Toshiba", price: 3000, id: 1 }, { name: "Asus", price: 1000, id: 2 }]

//get all products
app.get("/products", (req, res) => {
    res.send({ products })
})

//get one products
app.get("/products/:id", (req, res) => {
    //console.log(req.params.id)
    res.send(products.find(el => el.id == req.params.id))
})
//filter products price>x name

app.get("/products", (req, res) => {
    res.send(products.filter(el=>el.price>Number(req.query.price)))
})


//add new products
app.post("/products", (req, res) => {
    res.send([...products,req.body])
})



const port = process.env.PORT || 5000
app.listen(port, (err) => {
    err ? console.log(err) : console.log(`server is running at port ${port}`)
})