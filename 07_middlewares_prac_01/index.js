const express = require("express");

const app = express();
app.use(express.json());
// app.get('/', function(req,res){
//     console.log("dheeraj panyam");
//     res.send("dheeraj hi heeloo")
// })
let numOfReqs =0;
function printDateTime() {
  const now = new Date();

  const date = now.toLocaleDateString();
  const time = now.toLocaleTimeString();

  return `${date} -> ${time}`;
}
function logger(req,res,next){
   console.log(`Received a ${req.method} 
        at URL -> ${req.url}
        at the date & time of-> ${printDateTime()}`);
    next();
}
function counter(req,res,next){
numOfReqs = numOfReqs+1;
console.log(`numbner of reqs are -> ${numOfReqs}`)
next();
}

app.use(logger)
// app.use(counter)
 app.get('/',counter,function(req,res){
    res.send(`<h1>dheeraj here hi</h1>`)

 })

app.post('/sum/:firstArg/:secondArg',counter,function(req,res){
    const a = parseInt(req.params.firstArg);
    const b = parseInt(req.params.secondArg);
    // http://localhost:3000/sum/5/6
    const ans = a + b;
res.json({
    ans : ans
})
})
app.get('/reqs',function(req,res){
    res.send(`<h1>${numOfReqs}</h1>`)
})

app.listen(3000);