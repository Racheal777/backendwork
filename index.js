const http = require('http')
const express = require('express')
const app = express()
app.use(express.json ())
const bodyParser=require("body-parser")

const mongoose = require('mongoose')

require('dotenv') .config()



// const config ={
//     useNewUrlParser:true,
//     useUnifiedTopology: true

// }


// app.use(bodyParser())

app.get("/", (request, response) =>{
    //console.log('This is the request body', request.body)
    response.send("Welcome");

});

app.get('/Books',(request,response) => {
   // console.log(request)
    const userData = require("./Books.json");
    response.json(userData);
});

app.get('/Books/:id', async (request,response) => {
    // console.log(request)
    try{
        const book = await Books.findById(request.params.id)
        if(book)
        response.json(book)
    }
    catch(error) {
        respond.status(404).send('Book not found')
    }
 });

app.get('/Authors',(request,response) => {
    // console.log(request)
     const userData = require("./Authors.json");
     response.json(userData);
 });

app.post('/Books',(request,response) => {
    
    const requestBody = request.body
   // console.log(requestBody)
    response.send({action :"register", message : "welcome", body : requestBody});

});
app.delete('/Books',(request,response) => {
    
    const user = require ('./Books.json');
    const deleteUser = user.pop()
    response.send(deleteUser);

});

app.delete('/Books/:bookid', async (request,response) => {
    // console.log(request)
    try{
        const book = await Books.findOneAndRemove(request.params.id)
        if(book)
        console.log(book)
        response.send('Deleted succesfully')
    }
    catch(error) {
        respond.status(404).send('Cannot delete Book')
    }
 });
// app.post('/Login',(request,response) => {
    
//     const user = require ('./Books.json');
//     const postnewauthor = user.push()
//     response.send(postnewauthor);

// });

app.use(bodyParser.json());


app.listen(process.env.PORT, () => {
    console.log("Express app is working")
   
})