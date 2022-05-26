var adjusted=[
    ["1st quarter 2010(p)","960,474","38,707","4.0",'2.0','1.5','6.3','14.3'],
    ["4th quarter 2009(r)","941,355","37,141","4.1",'2.0','4.2','2.1','14.6'],
    ["3rd quarter 2009","922,763","38,141","4.1",'2.0','4.2','2.1','14.6'],
    ["2nd quarter 2009","904,045","36,141","4.1",'2.0','4.2','-2.1','-14.6'],
    ["1st quarter 2009(r)","903,718","38,141","4.1",'2.0','4.2','-2.1','-14.6']
];
var notAdjusted=[
    ["1st quarter 2010(p)","897,004","34,707","4.0",'2.0','-1.5','6.3','-14.3'],
    ["4th quarter 2009(r)","985,649","38,141","4.1",'2.0','4.2','2.1','14.6'],
    ["3rd quarter 2009","944,265","38,141","4.1",'2.0','-4.2','2.1','14.6'],
    ["2nd quarter 2009","919,646","33,141","4.1",'2.0','4.2','-2.1','-14.6'],
    ["1st quarter 2009","839,625","32,141","4.1",'2.0','4.2','-2.1','-14.6']
];


var text="<table>";
text+="<tr>";
text+="<th rowspan='2'>Quarter</th>";
text+="<th colspan='2'>Retail sales (million of dollars)</th>";
text+="<th rowspan='2'>Ecommerce as a <br>percent of total</th>";
text+="<th colspan='2'>Percent change <br>from prior quarter</th>";
text+="<th colspan='2'>Percent change from <br> same quarter a year ago</th>";
text+="</tr>";
text+="<tr>";
text+="<th>Total</th>";
text+="<th>Ecommerce</th>";
text+="<th>Total</th>";
text+="<th>Ecommerce</th>";
text+="<th>Total</th>";
text+="<th>Ecommerce</th>";
text+="</tr>";;

text+="<br>";
text+="<tr>";
text+="<td><b>Adjusted</b></td>";
adjusted.forEach((element) => {
     text+='<tr>';
     text+='<td>'+element[0]+'</td>';
     text+='<td>'+element[1]+'</td>';
     text+='<td>'+element[2]+'</td>';
     text+='<td>'+element[3]+'</td>';
     text+='<td>'+element[4]+'</td>';
     text+='<td>'+element[5]+'</td>';
     text+='<td>'+element[6]+'</td>';
     text+='<td>'+element[7]+'</td>';
     text+='</tr>';
});
text+="<tr>";
text+="<td><b>Not Adjusted</b></td>";
notAdjusted.forEach((element) => {
    text+='<tr>';
     text+='<td>'+element[0]+'</td>';
     text+='<td>'+element[1]+'</td>';
     text+='<td>'+element[2]+'</td>';
     text+='<td>'+element[3]+'</td>';
     text+='<td>'+element[4]+'</td>';
     text+='<td>'+element[5]+'</td>';
     text+='<td>'+element[6]+'</td>';
     text+='<td>'+element[7]+'</td>';
     text+='</tr>';
});

text+='</table>';

document.getElementById("res").innerHTML=text;