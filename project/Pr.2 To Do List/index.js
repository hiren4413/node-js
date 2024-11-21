    const express = require('express');

const app = express();

const port = 8000;

app.set('view engine', 'ejs')

let toDo = [];

app.get('/', (req, res)=>{
    return res.render("view", {toDo})
})

// add task
app.post('/addList', (req, res)=>{
    const {work} = req.body;
    let task ={
        id: Math.floor(Math.random()*100000),
        work: work,
    }

    toDo.push(task);

    console.log("Task Added successfully");
    return res.redirect("/");
})

app.listen(port, (err)=> {
    if(err){
        console.log(err);
        return false;
    }
    console.log(`server start at port :- ${port}`);
})