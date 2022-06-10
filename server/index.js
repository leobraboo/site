const express = require("express")
const nodemailer = require('nodemailer')
const app = express()
const port = 3003
const cors = require("cors")
const router = express.Router()


const user = "leo-llopes@hotmail.com"
const pass = "leobrabo123"
 
router.post("/enviarEmail", async( req , res)=>{
    console.log(req.body)
    const tranporter = nodemailer.createTransport({
        host: "smtp-mail.outlook.com" ,
        port: 587 ,
        auth: {user,pass}
    })

    tranporter.sendMail({
        from: user,
        to: user,
        replyTo: "leo-llopes@hotmail.com",
        subject: "olá , o pai é brabo",
        text: "doidera , consegui caralho"
    }).then(info=>{
        res.send(info)
    }).catch(error=>{
        res.send(error)
    })
    res.status(200).json({message: "Email enviado com sucesso"})
})






app.use(express.json())
app.use(cors())
app.use(router)

app.listen(port,function(){
    console.log(`servidor rodando gracas a eriks ${port} `)
})