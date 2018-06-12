function myFunction(value) {
    if(value == 'C') {
        document.getElementById("userinput").innerHTML = "";
        return;
    } else if(value == '=') {
        calculation = eval(document.getElementById("userinput").innerHTML);
        document.getElementById("userinput").innerHTML = calculation;
        return;
    }
    document.getElementById("userinput").innerHTML += value;
};