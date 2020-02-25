const express = require('express')
const app = express()
const bodyParser=require('body-parser')
const routes = require('./Routes')
const port = 3000

app.use(bodyParser.json())


app.use('/',routes)


app.use((error,req,res,next)=>
    res.json(
    {
        success:false,
        error

    }
    )
)

app.listen(port, () => {
   console.log("Server started")
})

module.exports=app;