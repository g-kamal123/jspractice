var val="";
var numeric_val;
function add(){
    val= val+ "+";
    document.getElementById("txt").value= val;
}
function subtract(){
    val= val+ "-";
    document.getElementById("txt").value= val;
}
function mul(){
    val= val+ "*";
    document.getElementById("txt").value= val;
}
function div(){
    val= val+ "/";
    document.getElementById("txt").value= val;
}
function change(id){
    val += id;
    document.getElementById("txt").value= val;
}
function reset(){
    val ="";
    document.getElementById("txt").value=val;
}
function totals(){
    
    try{
        val = eval(val);
        document.getElementById("txt").value= val;
    }
    catch(e){
        alert("enter valid input");
    }
   
}