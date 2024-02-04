const express = require('express');
const {creatTodo , updateTodo} = require('./types');
const port = 3000;
const app = express();

app.use(express.json());



app.post('/todo', (req ,res)=>{
   const createPayload  = req.body;
   const parsedPayload = creatTodo.safeParse(createPayload);

   if(!parsedPayload.success){
        res.status(411).json({
            msg : "You sent a wrong input please check !!!"
        })
        return 
   }

   // now we have data simply push it in the mongo


})


app.get('/todos', (req , res)=>{

})

app.patch('/completed' , (req ,res) =>{
    const updatePayload = req.body;
    const parsedupdatePayload = updateTodo.safeParse(updatePayload);

    if(!parsedupdatePayload.success){
        res.send(411).json({
            msg : "You have entered the wrong input pls check"
        })
        return 
    }

    //else find that todo using id and marked it down
})

app.listen(port, ()=>{
 console.log("Server is listening at port.....",port);
})