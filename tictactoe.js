var arr=[];
var temp = 'X';
var t=1;
var count =0;
function setValues(evt){
    if(!evt.target.classList.contains('td1')){
        return;
    }
    if(temp=='X'){
        var txt = document.createTextNode(temp);
        evt.target.append(txt);
        temp = 'O';
        var position=evt.target.id;
        arr[position]= 1;
        count++;
        if(count>=5)
        t= check_winner();
    }
    else{
      var txt1 = document.createTextNode(temp);
      evt.target.append(txt1);
      temp = 'X';
      var position=evt.target.id;
      arr[position]= 0;
      count++;
      if(count>=5)
      t=check_winner();
    }
    check_draw();
    evt.target.style.pointerEvents = "none";
}
document.querySelector('table').addEventListener('click',setValues);
document.querySelector('input[type="button"]').addEventListener('click',game_reset);
function check_winner(){
    //winnner for 1
    if(arr[0]+arr[1]+arr[2]==3)
    declare_winnerA();
    if(arr[0]+arr[3]+arr[6]==3)
    declare_winnerA();
    if(arr[0]+arr[4]+arr[8]==3)
    declare_winnerA();
    if(arr[6]+arr[7]+arr[8]==3)
    declare_winnerA();
    if(arr[3]+arr[4]+arr[5]==3)
    declare_winnerA();
    if(arr[1]+arr[4]+arr[7]==3)
    declare_winnerA();
    if(arr[2]+arr[5]+arr[8]==3)
    declare_winnerA();
    if(arr[2]+arr[4]+arr[6]==3)
    declare_winnerA();
    //winner for 0
    if(arr[0]+arr[1]+arr[2]==0)
    declare_winnerB();
    if(arr[0]+arr[3]+arr[6]==0)
    declare_winnerB();
    if(arr[0]+arr[4]+arr[8]==0)
    declare_winnerB();
    if(arr[6]+arr[7]+arr[8]==0)
    declare_winnerB();
    if(arr[3]+arr[4]+arr[5]==0)
    declare_winnerB();
    if(arr[1]+arr[4]+arr[7]==0)
    declare_winnerB();
    if(arr[2]+arr[5]+arr[8]==0)
    declare_winnerB();
    if(arr[2]+arr[4]+arr[6]==0)
    declare_winnerB();
}
function check_draw(){
    var flag =1;
    for(var i=0;i<9;i++){
        if(arr[i]==null)
        flag = 0;
    }
    if(flag==1 && t==0)
    declare_draw();
}
function declare_winnerA(){
    document.querySelector('p').style.color ="blue";
    document.querySelector('p').innerHTML = "Player X has won the game";
    document.querySelector('table').style.pointerEvents ="none";
    return 1;
}
function declare_winnerB(){
    document.querySelector('p').style.color = "Green";
    document.querySelector('p').innerHTML = "Player O has won the game";
    document.querySelector('table').style.pointerEvents ="none";
    return 1;
}
function declare_draw(){
    document.querySelector('p').style.color ="red";
    document.querySelector('p').innerHTML = "Draw";
    document.querySelector('table').style.pointerEvents ="none";
}
function game_reset(){
    location.reload();
}