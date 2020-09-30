let express = require('express');
let bodyParser = require('body-parser');
let dataStore = require('nedb');
const passport = require('passport');

let app = express();
let urlencoded  = bodyParser.urlencoded({extended:false});
app.set('view engine','ejs');
app.use('/assets',express.static('assets'));



let mydb = new dataStore('database.db');
mydb.loadDatabase();



app.get('/',(req,res)=>{
    res.render('register.ejs');
});
app.get('/register',(req,res)=>{
    res.render('register.ejs');
});
app.post('/login',urlencoded,(req,res)=>{

    mydb.insert(req.body);
    console.log('Got a request');
    res.render('login.ejs');
});
app.get('/login',(req,res)=>{
    res.render('login.ejs');
});
app.post('/success',urlencoded,(req,res)=>{
    
    mydb.count({$and: [{ user:req.body.user },{pass: req.body.pass}] }, function (err, count) {
        if(count===0){
            res.send('Failed to login');
        }
        else{
            
            
            res.render('success.ejs',{data:req.body});
        }
      });
    
});

app.get('/logout',(req,res)=>{
    
    req.logOut();
    
    res.render('logout.ejs');
});
app.listen(4000,function(){
    console.log('listening at server 4000..')
});