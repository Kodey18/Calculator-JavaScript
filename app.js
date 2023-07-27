const outputValue = document.querySelector('#output');
let expression = "";
let calculated = false;

let clr = ()=>{
    outputValue.value = "";
}

let display = (num)=>{
    if(calculated)
    {
        outputValue.value = ""
        calculated = false;
        outputValue.value += num;
    }
    else if(!calculated)
    {
        outputValue.value += num;
    }
}

let calculate = ()=>{
    try{
        expression = eval(outputValue.value); //eval function is used to evaluate the mathematical
        calculated = true;
    }
    catch{
        alert("Invalid Input");
    }
    finally{
        outputValue.value = expression;
    }
}

let del = ()=>{
    outputValue.value = outputValue.value.slice(0,-1);
}