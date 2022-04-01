document.write("Hello, world!")

function sayhellow(){
  var response = prompt("what's your name?");
  alert("hellow"+response+" have a good day");

}
function add(a,b){
 return a + b;
}
console.log(add(20,30));
console.log(add(100,30));

function showTopic(){
  var x = document.getElementById("demo");
   x.style.fontSize = "25px";
   x.style.color = "orange"
}
