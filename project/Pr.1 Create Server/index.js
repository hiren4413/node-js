let http = require('http'); 

let port = 9000;
let fs = require('fs');

let requesthandler = (req,res) =>{
    let filename = "";
    switch(req.url){
        case '/':
            filename = "./Home.html"
        break;
        case '/about':
            filename = "./about.html"
        break;
        case '/gallery':
            filename = "./gallery.html"
        break;
        case '/contact':
            filename = "./contact.html"
        break;
        case '/login':
            filename = "./login.html"
        break;
    }
    fs.readFile(filename,(err,data)=>{
        if(err){
            console.log(err);
            return false;
        }
        res.end(data);
    })
}

let server = http.createServer(requesthandler);

server.listen(port,(err)=>{
    console.log(`server is ruunning : ${port}`);
});