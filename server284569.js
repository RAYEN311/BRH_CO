const express = require('express')
const port = process.env.PORT || 4040
const app = express()

// biew engine used 

app.set('view engine' , 'ejs')
app.use(express.static('./public'))
app.use(express.urlencoded({extended : true}))

// get methode for the initial page 
// use router in our application (methode / best one)

const homeRouter = require('./routes/home')
app.use('/', homeRouter)


app.get('/down_doc', (req , res)=>{
    res.download('DOC.txt');
})

// listening the http request from the frontend
app.listen(port, () => console.log(`Server listening on http://localhost:${port}`))



