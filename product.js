function addpro(){
    var a=document.getElementById("p-id").value;
    var b=document.getElementById("p-name").value;
    var c=document.getElementById("p-price").value;
    // console.log(a);
    // console.log(b);
    // console.log(c);
    var arr=[];
    arr[0]=a;
    arr[1]=b;
    arr[2]=c;
    
    var tbl = document.getElementById("r-id");
        var row = document.createElement("tr");
        for (var i = 0; i < 3; i++) {
          var col = document.createElement("td");
        //   console.log(cell);
          var Text = document.createTextNode(arr[i]);
          col.appendChild(Text);
          row.appendChild(col);
        }
        tbl.appendChild(row);
    }