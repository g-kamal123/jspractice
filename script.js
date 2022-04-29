let arr=[
    ["Samsung", "Galaxy" ,"64" ,"15000"],
    ["Nokia","S730","128","22000"],
    ["Xiaomi","Note","32","12000"],
    ["Motorola","G10","32","15000"],
    ["Apple","S12","64","2500"]
];
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
