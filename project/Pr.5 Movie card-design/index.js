const express  =  require("express");

const app = express();

const port = 9000;

app.listen(port , (err)=>{
    if(err) {
        console.log(err);
        return false;
    }
    console.log(`server start at port : ${port}`);
})