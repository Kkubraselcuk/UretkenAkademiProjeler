var process;
var sayi1;
resetNumber = () => {
    document.getElementById("input-number").value = "";
}
addingNumbers = (number) => {
    var input = document.getElementById("input-number");
    if(number == 0){
        if(input.value != ""){
            input.value += number;
        }
    }
    else{
        input.value += number;
    }
}
addingOperator = (operator) => {
    var input = document.getElementById("input-number");
    if(operator == "*"){
        sayi1 = input.value;
        process = "*";
        input.value += operator;
    }
    else if(operator == "+"){
        sayi1 = input.value;
        process = "+";
        input.value += operator;
    }
    else if(operator == "-"){
        sayi1 = input.value;
        process = "-";
        input.value += operator;
    }
    else if(operator == "/"){
        sayi1 = input.value;
        process = "/";
        input.value += operator;
    }
    else{
        input.value += operator;
    }
}
result=()=>{
    var input = document.getElementById("input-number");
    var sayi2 = input.value.split(process)[1];
    switch(process){
        case '+': 
            input.value = parseFloat(sayi1) + parseFloat(sayi2); 
            break;
        case '-': 
            input.value = parseFloat(sayi1) - parseFloat(sayi2); 
            break;
        case '*': 
            input.value = parseFloat(sayi1) * parseFloat(sayi2); 
            break;
        case '/': 
            input.value = parseFloat(sayi1) / parseFloat(sayi2); 
            break;
        default:
            break;
    }
}