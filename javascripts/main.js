var num1El = document.getElementById("num1");
var num2El = document.getElementById("num2");
var screen1 = document.getElementById("screen");
var currentOp = '';

function show(){
  screen1.innerHTML ='';
}

function fun(){
  var num1 = parseInt(num1El.value);
  var num2 = parseInt(num2El.value);
  var result = 0;
  switch (currentOp) {

    case '+':
    result = num1 + num2;
      console.log(result);
      break;

    case '-':
    result = num1 - num2;
      break;

    case '*':
    result = num1 * num2;
      break;

    case '/':
    result = num1 / num2;
      break;

  }
  screen1.innerHTML = result;
}

function addClicked(){
  currentOp = '+';

}
