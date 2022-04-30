let arr=[
    ["Samsung", "Galaxy" ,"64" ,"15000"],
    ["Nokia","S730","128","22000"],
    ["Xiaomi","Note","32","12000"],
    ["Motorola","G10","32","15000"],
    ["Apple","S12","64","2500"]
];
 var arr4=[];
var tbl= document.getElementById("t-id");
for(var i=0;i<5;i++){
    var row= document.createElement("tr");
    for(var j=0;j<4;j++){
        var col= document.createElement("td");
        var text= document.createTextNode(arr[i][j]);
        col.appendChild(text);
        row.appendChild(col);
    }
    tbl.appendChild(row);
    // <tr style="border-bottom: thin solid"></tr>
}
function search(){
    // document.getElementById("t1-id").innerHTML=" ";
    var searched_item = document.getElementById("evalue").value;
    var tbl= document.getElementById("t1-id");
   
    var arri=[];
    for(var i=0;i<5;i++){
        for(var j=0;j<4;j++){
            if(arr[i][j]==searched_item){
               
                arri.push(i);
                // if(i*j==12)
                // var t =true;
                // break;
            }
            console.log(arri);
        }
    }
        // if(t){
    for(var m=0;m<arri.length;m++){
        i=arri[m];
        var row =document.createElement("tr");
        for( var k=0;k<4;k++){
       
        // console.log(k); 
        
            var col= document.createElement("td");
            var text= document.createTextNode(arr[i][k]);
            col.appendChild(text);
            row.appendChild(col);
            tbl.appendChild(row);
        }
    }
        
}
function selection(){
    // var selected_option= document.getElementById("s2").value;
    var selected_order = document.getElementById("s3").value;
    if(selected_order==0)
    arr=arr.sort(order);
    else {arr=arr.sort(order);
        arr.reverse();
    }
    var tbl= document.getElementById("t2-id");
for(var i=0;i<5;i++){
    var row= document.createElement("tr");
    for(var j=0;j<4;j++){
        var col= document.createElement("td");
        var text= document.createTextNode(arr[i][j]);
        col.appendChild(text);
        row.appendChild(col);
    }
    tbl.appendChild(row);
    // <tr style="border-bottom: thin solid"></tr>
}

}
function order(a,b){
    var n= document.getElementById("s2").value;
    if(n<2){
        if(a[n]===b[n])
        return 0;
        else 
        return (a[n]<b[n])?1:-1;
    }
    else{
        if(Number(a[n])=== Number(b[n]))
        return 0;
        else
        return (Number(a[n])<Number(b[n]))?1:-1;
    }



}
function add_product(){
    var company= document.getElementById("cname").value;
    var model= document.getElementById("mname").value;
    var memo=document.getElementById("memory").value;
    var pr=document.getElementById("price").value;
    var m=Number(memo);
    var p=Number(pr);
    if(isNaN(m)){
    alert("Enter valid input");
    document.getElementById("memory").innerHTML=" ";
    document.getElementById("t4-id").display=block;
    }
    if(isNaN(p)){
        alert("Enter valid input");
        document.getElementById("price").innerHTML=" ";
        document.getElementById("t4-id").display=block;
    }
    if(!isNaN(company)){
        alert("Enter valid input");
        document.getElementById("cname").innerHTML=" ";
        document.getElementById("t4-id").display=block;
    }

    var arr1=[];
    arr1[0]=company;
    arr1[1]=model;
    arr1[2]=memo;
    arr1[3]=pr;
    // console.log(arr1);
    arr.splice(2, 0, arr1);
    // console.log(arr);
    var tbl= document.getElementById("t4-id");
    for(var i=0;i<arr.length;i++){
    var row= document.createElement("tr");
    for(var j=0;j<4;j++){
        var col= document.createElement("td");
        var text= document.createTextNode(arr[i][j]);
        col.appendChild(text);
        row.appendChild(col);
    }
    tbl.appendChild(row);
    // <tr style="border-bottom: thin solid"></tr>
    }
}
function add_your_product(){
    var product_name= document.getElementById("s5").value;
    var quant= document.getElementById("quantity").value;
    var m= quant;
    if(isNaN(m)){
        alert("Enter valid input");
        document.getElementById("quantity").innerHTML=" ";
        document.getElementById("t5-id").display=block;
        }
    var price=[15000,22000,12000,15000,2500];
    var amt;
    for(var i=0;i<5;i++){
        if(i==product_name){
            var amt= quant*price[i];
            break;
        }      
    }
    
    var arr2=[];
    arr2[0]=product_name;
    arr2[1]=quant;
    arr2[2]=amt;
    arr4.push(arr2);

    var tbl=document.getElementById("t5-id");
    var row=document.createElement("tr");
    for(var k=0;k<3;k++){
        var col=document.createElement("td");
        var text=document.createTextNode(arr2[k]);
        col.appendChild(text);
        row.appendChild(col);
    }
    tbl.appendChild(row);
    // console.log(tbl);
}
console.log(arr4);
function generate_bill(){
    let sum=0;
    for(var i=0;i<arr4.length;i++){
        sum+= Number(arr4[i][2]);   
    }
    console.log(sum);
    var arr5=[];
    arr5[0]="Total";
    arr5[1]=" ";
    arr5[2]= sum;
    console.log(sum);
    var tbl=document.getElementById("t5-id");
    var row=document.createElement("tr");
    for(var k=0;k<3;k++){
        var col=document.createElement("td");
        var text=document.createTextNode(arr5[k]);
        col.appendChild(text);
        row.appendChild(col);
    }
    tbl.appendChild(row);
    // console.log(tbl);
}

var tbl= document.getElementById("t7-id");
// var chk;
for(var i=0;i<5;i++){
    var row= document.createElement("tr");
    for(var j=0;j<4;j++){
        var col= document.createElement("td");
        var cb=document.createElement("input");
        cb.type="checkbox";
        var cht=document.createTextNode(cb);
        var text= document.createTextNode(arr[i][j]);
        col.appendChild(text);
        row.appendChild(col);
        
    }
    row.appendChild(cb);
    // chk.appendChild(cb);
    tbl.appendChild(row);
    // <tr style="border-bottom: thin solid"></tr>
}
function delete_pro(){
    var c1=document.getElementById("chk0").value;
    var c2=document.getElementById("chk1").value;
    var c3=document.getElementById("chk2").value;
    var c4=document.getElementById("chk3").value;
    var c5=document.getElementById("chk4").value;
    var cb=[];
    cb[0]=c1;
    cb[1]=c2;
    cb[2]=c3;
    cb[3]=c4;
    cb[4]=c5;
    for(var i=0;i<5;i++){
        if(cb[i]==i){
            delete_that(i);
        }
    }
}
function delete_that(){

}