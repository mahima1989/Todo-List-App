//jshint esversion:6

  module.exports.getDate=getDate;


function getDate(){

let currentDay =new Date();

let options={ weekday: 'long',month: 'long', day: 'numeric',hour:"2-digit",minute:"2-digit",seconds:"2-digit"};

return currentDay.toLocaleDateString("en-US", options);
}
//another way of expressing a function in a module is to declare a anonymous dunction and assign it
module.exports.getDay=function (){

let currentDay =new Date();

let options={ weekday: 'long'};
let day=currentDay.toLocaleDateString("en-US", options);
return day;
}
