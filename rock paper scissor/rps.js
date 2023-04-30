const output=document.getElementById("output");
const rock=document.getElementById("rock");
const paper=document.getElementById("paper");
const scissor=document.getElementById("scissor");
const computer=document.getElementById("comp");
const you=document.getElementById("you");
var a;
var u=0,comp=0;
//output.value=a;//
rock.addEventListener("click",play);
paper.addEventListener("click",play);
scissor.addEventListener("click",play);
function play()
{
    a=Math.floor(Math.random()*3);
    if(a==0)
    {

        output.value="MATCH IS DRAW";
    }
    else if(a==1)
    {
        output.value="YOU LOST";
        comp++;
        computer.value=comp;
    }
    else
    {
        output.value="YOU WON";
        u++;
        you.value=u;
    }
}