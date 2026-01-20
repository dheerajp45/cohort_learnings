const express = require('express')
const app = express();
const jwt = require('jsonwebtoken');
app.use(express.json());
const JWT_SECRET = "dheerajp45";
const users =[];

app.post('/signup',function (req,res){
const username=req.body.username;
const password=req.body.password;

let userExists = false;
for (let i = 0; i < users.length; i++) {
    if(users[i].username==username)
    {
        userExists =true;
    }
    if (userExists) {
        res.json({
            message:"There is an account already created with this username please sign in with your account"
        })
    }
    else{
            users.push({
                username,
                password
            })
            res.json({
                message:`hey ${username} your account is sucessfully created `
            })
            console.log(users);
            
        }
    
}
})

app.post('/signin',function (req,res){
const username=req.body.username;
const password=req.body.password;

let foundUser = null;
})