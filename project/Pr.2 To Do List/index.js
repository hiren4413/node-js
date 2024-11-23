const express = require("express");

let code = 8000;


let app = express();

app.set("view engine" , "ejs");

let toDo = [] ;

app.use(express.urlencoded());

app.get("/", (req,res)=>{
    return res.render("view",{
        all:toDo
    });
});

// =============== Add ToDo ===============

app.post("/addTask", (req,res)=>{
    const {work, end} = req.body;
    let task ={
        id: Math.floor(Math.random()*100000),
        work: work,
        end:end
    }
    toDo.push(task);

    console.log("Task Added successfully");

    return res.redirect("/"); 
});

//  =============== Delete ToDo ===============

app.get("/deleteTask", (req,res)=>{
    let id = req.query.delId;
    let deletedTodo = toDo.filter(val => val.id != id)
    toDo = deletedTodo;
    console.log("Task Deleted Successfully.");
    return res.redirect("/");
})

//  =============== Edit ToDo ===============

app.get('/editTask',(req,res)=>{
    let single = toDo.find(val => val.id == req.query.editId);
    return res.render('edit',{
        single
    })
});

//  =============== Update ToDo ===============

app.post('/updateTask',(req,res)=>{
    let {editId, work, end} = req.body;
    let update = toDo.map((val)=>{
        if(val.id == editId){
            val.work = work,
            val.end=end
        }
        return val;
    })
    toDo = update;
    console.log("Your Task has now updated.");
    
    return res.redirect('/');
});

// listen code

app.listen(code,(err) => {
    if(err) {
        console.log(err); 
        return false;
    }
    console.log(` Server start on port :- ${code} `);
    
});