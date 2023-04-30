
const info=document.getElementById("info");
const restart=document.getElementById("restart");
const cell=[];
cell[0]=document.getElementById("cell1");
cell[1]=document.getElementById("cell2");
cell[2]=document.getElementById("cell3");
cell[3]=document.getElementById("cell4");
cell[4]=document.getElementById("cell5");
cell[5]=document.getElementById("cell6");
cell[6]=document.getElementById("cell7");
cell[7]=document.getElementById("cell8");
cell[8]=document.getElementById("cell9");

const Player1=document.getElementById("p1");
const Player2=document.getElementById("p2");

info.value="Player 1 is X";
var x=[];
var pl1=0;
var pl2=0;
var f=1;
  for(let i=0;i<9;i++){
    cell[i].addEventListener("click",function() {
      insert(i); 
    });
  }
restart.addEventListener("click",newgame);
function insert(i)
{
  if(f==1)
  {
    cell[i].innerHTML="X";
    x[i]="x";
    f=0;
    info.value="Player 2 is O";
    cell[i].disabled=true;
    check();
  }
  else
  {
    cell[i].innerHTML="O";
    x[i]="o";
    f=1;
    info.value="Player 1 is X";
    cell[i].disabled=true;
    check(i);
  }
}
function check()
{
  if(x[0]=="x" && x[1]=="x" && x[2]=="x")
  {
    xwin();
  }
  if(x[3]=="x" && x[4]=="x" && x[5]=="x")
  {
    xwin();
  }
  if(x[6]=="x" && x[7]=="x" && x[8]=="x")
  {
    xwin();
  }
  if(x[0]=="x" && x[3]=="x" && x[6]=="x")
  {
    xwin();
  }
  if(x[1]=="x" && x[4]=="x" && x[7]=="x")
  {
    xwin();
  }
  if(x[2]=="x" && x[5]=="x" && x[8]=="x")
  {
    xwin();
  }
  if(x[0]=="x" && x[4]=="x" && x[8]=="x")
  {
    xwin();
  }
  if(x[2]=="x" && x[4]=="x" && x[6]=="x")
  {
    xwin();
  }
  if(x[0]=="o" && x[1]=="o" && x[2]=="o")
  {
    owin();
  }
  if(x[3]=="o" && x[4]=="o" && x[5]=="o")
  {
    owin();
  }
  if(x[6]=="o" && x[7]=="o" && x[8]=="o")
  {
    owin();
  }
  if(x[0]=="o" && x[3]=="o" && x[6]=="o")
  {
    owin();
  }
  if(x[1]=="o" && x[4]=="o" && x[7]=="o")
  {
    owin();
  }
  if(x[2]=="o" && x[5]=="o" && x[8]=="o")
  {
    owin();
  }
  if(x[0]=="o" && x[4]=="o" && x[8]=="o")
  {
    owin();
  }
  if(x[2]=="o" && x[4]=="o" && x[6]=="o")
  {
    owin();
  }
}
function newgame()
{
  for(i=0;i<9;i++)
  {
    cell[i].innerHTML="";
    cell[i].disabled=false;
    x[i]="";
  }
  info.value="Player 1 is X";
  f=1;
}
function xwin()
{
  info.value="X win";
  pl1++;
  Player1.value=pl1;
  for(i=0;i<9;i++)
  {
    cell[i].disabled=true;
  }
}
function owin()
{
  info.value="O win";
  pl2++;
  Player2.value=pl2;
  for(i=0;i<9;i++)
  {
    cell[i].disabled=true;
  }
}