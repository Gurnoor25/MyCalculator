let numNodes = document.querySelectorAll(".number");
let opNodes  = document.querySelectorAll(".operator");

for (let i=0;i<numNodes.length;i++){
    numNodes[i].addEventListener('click',display);
}
for (let i=0;i<opNodes.length;i++){
    opNodes[i].addEventListener('click',display);
}

let checkNum = ['0','1','2','3','4','5','6','7','8','9','.'];
let checkOp  = ['+','-','*','%','/'];


let completeValue = "";
function display(){
    screenValue=this.firstElementChild.innerHTML;
    if (screenValue=="="){
        myfunc(completeValue);
        document.getElementById("screen").value= eval(completeValue);
        completeValue=document.getElementById("screen").value;
        return;
    }
    else if (screenValue == "=&gt;"){
        completeValue = completeValue.substring(0,completeValue.length-1);
        document.getElementById("screen").value = completeValue;
    }
    else if(screenValue=="AC") {
        document.getElementById("screen").value = "";
        completeValue="";

    }
    else{
           document.getElementById("screen").value += screenValue;
           completeValue+=screenValue;
    }
}
let numStack = [];
let opStack =[];
function myfunc(cv){
    let numStart = 0;
    let numEnd = 0;
    for(let i=0;i<cv.length;i++){
        if (checkNum.includes(cv[i]))
           {
            
            numEnd = i;
            if (i==cv.length-1){
                numStack.push(cv.substring(numStart,numEnd+1));
            }
            }
        else {
           numStack.push(cv.substring(numStart,numEnd+1));
           opStack.push(i);
           checkPrecedence(cv[i]);
           if(i+1<cv.length)
               {
                    numStart = i+1;
                } 
             }
        console.log(cv);
    }
}

function checkPrecedence(symbol){



}
