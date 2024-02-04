const express = require('express');
const port = 3000;
import types from './types';
const app = express();

app.use(express.json());



app.post('/todo', (req ,res)=>{
   const title = req.body.title;
   const description = req.body.description;
   

})


app.get('/todos', (req , res)=>{

})

app.patch('/completed' , (req ,res) =>{

})

app.listen(port, ()=>{
 console.log("Server is listening at port.....",port);
})