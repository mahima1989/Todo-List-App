//jshint esversion:6

const express=require('express');
const bodyParser=require('body-parser');
const date=require(__dirname+'/date.js');
const app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
//always use ejs below const app  express module not above it
let items=["pizza","burger","cake","coke"];
let work=[];
app.set('view engine', 'ejs');

app.get("/",function(req,res){

let day=date.getDate();
res.render('list',{title:day, newListItems:items});
});

app.post("/",function(req,res){
  let next=req.body.item;
  if(req.body.submit==="work"){
    work.push(next);
    res.redirect("/work");
}
    else{
      items.push(next);
      res.redirect("/");
  }
});
app.get("/work",function(req,res){
  res.render("list",{title:"work",newListItems:work});
});
app.get("/about",function(req,res){
  res.render('about');
});


app.listen(3000,function(){
  console.log("your server is running on port 3000");
})
