const express = require("express")
const app = express()
const port = 3003
const cors = require("cors")
 


app.use(express.json())
app.use(cors())
app.listen(port,function(){
    console.log(`servidor rodando gracas a eriks ${port} `)
})