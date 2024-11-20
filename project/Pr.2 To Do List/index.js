const express = require('express');

const app = express();

const port = 9000;
app.set('view engine', "ejs");

let toDo = [];

app.use(express.urlencoded);

app.get('/',(req,res)=>{
    return res.render("view")
    
})

// add toDo

app.post('/addList', (req,res)=>{
    const {toDoTask} = req.body;

    let task = {
        id : Math.floor(Math.random()*100000),
        task: toDoTask,
    }

    toDo.push(task);
    
})
app.listen(port, (err)=>{
    if(err){
        console.log(err);
        return false;
    }
    console.log(`server start at port : ${port}`);
})