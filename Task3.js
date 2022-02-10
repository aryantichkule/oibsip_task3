var evaluation = [];

var display = document.getElementById("display");

function updateDisplay(numVal) {

        display.value += numVal;
        evaluation.push(numVal);

}

/*function decimalBtn() {
    if (!evaluation.includes(".")) {
        display  += ".";
    }
}*/



function updateDisplayOperators(operatorVal) {

    display.value += operatorVal;

    evaluation.push(operatorVal);

} 

function calcOperation() { 

    display.value = eval(evaluation.join(""));

    evaluation = [display.value];

}

function backBtn() {

    evaluation.pop();

    display.value = evaluation.join("");

}

function clearBtn () {

    display.value = " ";

    evaluation = [];
}