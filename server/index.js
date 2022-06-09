const express = require("express")
const app = express()
const port = 3003
const cors = require("cors")
const router = express.Router()

 
router.post("/enviarEmail", async( req , res)=>{
    console.log(req.body)
    res.status(200).json({message: "Email enviado com sucesso"})
})

app.use(express.json())
app.use(cors())
app.use(router)

app.listen(port,function(){
    console.log(`servidor rodando gracas a eriks ${port} `)
})