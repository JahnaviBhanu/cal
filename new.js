let operator="";
let a="";
let b="";
function append(num){
    if(operator==""){
        a+=num;
        document.getElementById('result').value=a;
    }
    else{
        b+=num;
        document.getElementById('result').value=b;
    }
}
function operation(op){
     operator=op;
}
function calculate(){
    let result;
    switch(operator){
           case '-':
           result=parseInt(a-b);
           break;
           case '*':
           result=parseInt(a*b);
           break;
           case '+':
           result=parseInt(a)+parseInt(b);
           break;
           case '/':
           result=parseInt(a/b);
           break;
    }
    document.getElementById('result').value=result;
}
function clearresult(){
   operator="";
   a="";
   b="";
   document.getElementById('result').value='';
}