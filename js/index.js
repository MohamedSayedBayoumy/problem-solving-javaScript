function getInputValue() {
  var inputElement = document.getElementById("userInput");

  var inputValue = Number(inputElement.value);

  switch (inputValue) {
    case 1:
      task_1();
      break;
    case 2:
      task_2();
      break;
    case 3:
      task_3();
      break;
    case 4:
      task_4();
      break;
    case 5:
      task_5();
      break;
    case 6:
      task_6();
      break;
    case 7:
      window.alert("No Task , Issue With PDF");
      break;
    case 8:
      task_8();
      break;
    case 9:
      task_9();
      break;
    case 10:
      task_10();
      break;
    case 11:
      task_11();
      break;
    case 12:
      task_12();
      break;
    case 13:
      task_12_2();
      break;
    case 14:
      task_13();
      break;
    case 15:
      task_14();
      break;
    case 16:
      task_15();
      break;
    case 17:
      task_16();
      break;
    case 18:
      task_17();
      break;
    case 19:
      task_18();
      break;
    case 20:
      task_19();
      break;
    case 21:
      task_20();
      break;
    default:
      console.log("The number is not between 1 and 21");
  }
}

function showPromte(text) {
  return alert(text);
}

function checkAndGetUserInput() {
  var input;
  do {
    return (input = Number(window.prompt("Number:")));
  } while (isNaN(input) || input === null);
}

function task_1() {
  console.log("Value From User " + checkAndGetUserInput());
}

function task_2() {
  var input = checkAndGetUserInput();

  var condition = input % 3 == 0 && input % 4 == 0;

  if (condition) {
    console.log("Yes");
  } else {
    console.log("No");
  }
}

function task_3() {
  var f_input = checkAndGetUserInput();

  var s_input = checkAndGetUserInput();

  var condition = f_input > s_input;

  if (condition) {
    console.log(f_input);
  } else {
    console.log(s_input);
  }
}

function task_4() {
  var condition = Math.sign(checkAndGetUserInput());

  if (condition == 1) {
    console.log("Positive Number");
  } else {
    console.log("Negative Number");
  }
}

function task_5() {
  var f_input = checkAndGetUserInput();

  var s_input = checkAndGetUserInput();

  var t_input = checkAndGetUserInput();

  var maxNum = Math.max(f_input, s_input, t_input);
  var minNum = Math.min(f_input, s_input, t_input);

  console.log("max element = " + maxNum + " / " + "min element = " + minNum);
}

function task_6() {
  var binaryString = checkAndGetUserInput().toString(2);

  var check = input.charAt(binaryString.length - 1);

  if (check == 0) {
    console.log("Even");
  } else {
    console.log("Odd");
  }
}

function task_8() {
  var input = window.prompt("Type : ");

  var checkFirstChart = input.charAt(0) === input.charAt(0).toLowerCase();

  if (checkFirstChart) {
    console.log("Consonant");
  } else {
    console.log("vowel");
  }
}

function task_9() {
  var input = checkAndGetUserInput();
  for (var i = 1; i < input + 1; i++) {
    console.log(i);
  }
}

function task_10() {
  var input = checkAndGetUserInput();
  for (var i = 1; i < 13; i++) {
    console.log(input * i);
  }
}

function task_11() {
  var input;
  do {
    input = checkAndGetUserInput();
  } while (input === 1);

  for (var i = 1; i < input; i++) {
    var binaryString = i.toString(2);

    var checkOfOddNumber = binaryString.charAt(binaryString.length - 1);

    if (checkOfOddNumber == "0") {
      console.log(i);
    }
  }
}

function task_12() {
  var f_input = checkAndGetUserInput();
  var s_input = checkAndGetUserInput();

  var operation = f_input ** s_input;

  console.log(f_input + " ^ " + s_input + " is equal " + operation);
}

function task_12_2() {
  var marks = [];
  var total = 0;

  for (var i = 0; i < 5; i++) {
    var subjectMark = Number(prompt("Enter mark for subject " + (i + 1) + ":"));
    marks.push(subjectMark);
    total += subjectMark;
  }

  var average = total / 5;
  var percentage = (total / (5 * 100)) * 100;

  console.log("Total marks: " + total);
  console.log("Average marks: " + average);
  console.log("Percentage: " + percentage + "%");
}

function task_13() {
  var monthNumber = checkAndGetUserInput();

  if (monthNumber <= 12 && monthNumber >= 0) {
    switch (monthNumber) {
      case 1:
      case 3:
      case 5:
      case 7:
      case 8:
      case 10:
      case 12:
        console.log("Number of days in month " + monthNumber + " is 31");
        break;
      case 4:
      case 6:
      case 9:
      case 11:
        console.log("Number of days in month " + monthNumber + " is 30");
        break;
      case 2:
        console.log(
          "Number of days in month " + monthNumber + " is either 28 or 29"
        );
        break;
      default:
        console.log("Invalid month number");
    }
  }
}

function task_14() {
  var monthNumber = checkAndGetUserInput();

  var result = Math.round((monthNumber / 100) * 100);

  console.log(result);

  switch (true) {
    case result >= 90:
      showPromte("Grad is A");
      break;
    case result >= 80:
      showPromte("Grad is B");
      break;
    case result >= 70:
      showPromte("Grad is C");
      break;
    case result >= 60:
      showPromte("Grad is D");
      break;
    case result >= 40:
      showPromte("Grad is E");
      break;
    case result < 40:
      showPromte("Grad is F");
      break;

    default:
      break;
  }
}

function task_15() {
  task_13();
}

function task_16() {
  var monthNumber = checkAndGetUserInput();

  if (monthNumber.length === 1 && inputAlphabet.match(/[a-z]/i)) {
    if ("aeiou".includes(inputAlphabet)) {
      console.log("The alphabet is a Vowel");
    } else {
      console.log("The alphabet is a Consonant");
    }
  } else {
    console.log("Please enter a valid single alphabet");
  }
}

function task_17() {
  var number1 = checkAndGetUserInput();
  var number2 = checkAndGetUserInput();
  switch (true) {
    case number1 == number2:
      console.log(number1 + " is equal to " + number2);
      break;
    case number1 < number2:
      console.log("Bigger number is " + number2);
      break;
    case number1 > number2:
      console.log(" number is " + number1);
      break;
    default:
      console.log("Invalid number");
  }
}

function task_18() {
  var input = checkAndGetUserInput();
  let x = input % 2;
  switch (x) {
    case 0:
      console.log("even number");
      break;
    case 1:
      console.log("odd number");
      break;
  }
}

function task_19() {
  var input = checkAndGetUserInput();
  var check = Math.sign(input);
  switch (check) {
    case 1:
      console.log("The number is Positive");
      break;
    case -1:
      console.log("The number is Negative");
      break;
    default:
      console.log("The number is Zero");
  }
}

function task_20() {
  var inputOne = checkAndGetUserInput();
  var operation = window.prompt("Operation as Text:");
  var inputTwo = checkAndGetUserInput();

  switch (operation) {
    case "+":
      return console.log(inputOne + inputTwo);
    case "/":
      return console.log(inputOne / inputTwo);
    case "-":
      return console.log(inputOne - inputTwo);
    case "*":
      return console.log(inputOne * inputTwo);
    case "%":
      return console.log(inputOne % inputTwo);
    default:
      return console.log("Invalid Input Operation Data");
  }
}
