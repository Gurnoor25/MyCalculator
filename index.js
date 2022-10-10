let numNodes = document.querySelectorAll(".number");
let opNodes  = document.querySelectorAll(".operator");

for (let i=0;i<numNodes.length;i++){
    numNodes[i].addEventListener('click',display);
}
for (let i=0;i<opNodes.length;i++){
    opNodes[i].addEventListener('click',display);
}
let completeValue = "";
function display(){                                                                                           //TO PASS THE INPUT VALUE FOR COMPUTATION
    screenValue=this.innerHTML;
    console.log(screenValue);
    if (screenValue=="="){
        // myfunc(completeValue);
        document.getElementById("output-value").value= eval(completeValue);                 //USED EVAL FOR NOW AS THERE WERE FEW BUGS IN CODE , WiLL UPDATE BY TOMORROW
        // console.log(completeValue);
        // document.getElementById("output-value").value = myfunc(completeValue);
        completeValue=document.getElementById("output-value").value;
        return;
    }
    else if (screenValue == "CE"){
        completeValue = completeValue.substring(0,completeValue.length-1);
        document.getElementById("output-value").value = completeValue;
    }
    else if(screenValue=="C") {
        document.getElementById("output-value").value = "";
        completeValue="";
 
    }
    else{
           document.getElementById("output-value").value += screenValue;
           completeValue+=screenValue;
    }
}
// let checkNum = ['0','1','2','3','4','5','6','7','8','9','.'];
// let checkOp  = ['+','-','*','%','/'];                                                      //STACK IMPLEMENTATION WITH CORRECT PRECEDENCE
// let numStack = [];
// let opStack =[];
// let NeedOperation = false;
// let precendenceOrder =[];
// let result = 0;
// function myfunc(cv){                                                                          //TO CHECK FOR CALCULATION
//     let numStart = 0;
//     let numEnd = 0;
//     for(let i=0;i<cv.length;i++){
//         if (checkNum.includes(cv[i]))
//            {
            
//             numEnd = i;
//             if (i==cv.length-1){
//                 numStack.push(cv.substring(numStart,numEnd+1));
//                 while(opStack.length != 0){
//                     result = finalCalculation();
//                     numStack.push(result);
//                 }
//                 document.getElementById("output-value").value = result;
//             }
//             }
//         else {
//            numStack.push(cv.substring(numStart,numEnd+1));
//            NeedOperation = checkPrecedence(cv[i]);

//            while(NeedOperation){
//                 result  = finalCalculation();
//                 numStack.push(result);
//                 NeedOperation = checkPrecedence(cv[i]);
                

//             }
             
//                 opStack.push(cv[i]);
//            if(i+1<cv.length)
//                {
//                     numStart = i+1;
//                 } 
//              }
//         console.log(cv);
//     }
// }

// function checkPrecedence (op){                                          // CHECK PRECEDENCE 
//     if (precendenceOrder.length==0){
//         switch(op){                                                                             
//             case "+": precendenceOrder.push(1);
//                 break;
//             case "-": precendenceOrder.push(1);
//                 break;
//             case "*":  precendenceOrder.push(2);
//                 break;
//             case "/":  precendenceOrder.push(2);
//                 break;            
//         }
//     }

//     else {
//         let CurrentPrecedence = givePrecedence(op);
//         if (CurrentPrecedence < precendenceOrder[precendenceOrder.length-1]){
//             return true;
//         }
//         else {
//             precendenceOrder.push(CurrentPrecedence);
//         }

//     }

// }

// function givePrecedence (op){                               //GIVES THE PRECEDENCE VALUE OF CURRENT OPERATOR

//     switch(op){
//         case "+": return 1;
//             break;
//         case "-": return 1;
//             break;
//         case "*":  return 2;
//             break;
//         case "/":  return 2;
//             break;            
//     }
// }


// function finalCalculation(){                                   // FINAL CALCULATION USING 2 Operands and 1 Operator
//     let num2 = parseFloat(numStack.pop());
//     let num1 = parseFloat(numStack.pop());
//     let op = opStack.pop();
//     switch(op){
//         case "+": return num1 + num2;
//             break;
//         case "-": return num1 - num2;
//             break;
//         case "*":  return num1 * num2;
//             break;
//         case "/":  return num1 / num2;
//             break;            
//     }

// }
