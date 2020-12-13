const newauthorRouter = require("express").Router();
const{request,response} = require('express')
const newauthor = require ('./newauthor')

newauthorRouter.get('/',(request,response,next) => {
    newauthor.find({}).then(res =>{
        response.status(200).send(res)
        next();
    })
})

noteRouter.post ('/',async ( request,response,next) =>{
    const{email,password} = request.body;

    if (email && password){
        const newauthorCount = await newauthor.countDocuments();

        const newauthor = new Author ({
            id:newauthorCount + 1,
            title: title,
            content: content
        })

        newuser.save()
        .then (res => {
            response.status(201).send(res);
           
        })
    }
    else {
        response.status(400).send({message:'Check your request body'}
        )
    }
});

module.exports = newauthorRouter