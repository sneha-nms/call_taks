


let calculate = document.getElementById("inputBox");
let valid = "";
let Arr = [];

function num(x) {
  valid += x;

  if (parseInt(x) == x || x == ".") {
    calculate.value += x;

    if (valid.length < 2) {
      Arr.push(valid);
    } else {
      Arr[Arr.length - 1] = Arr[Arr.length - 1] + x;
    }
  } else {
    if (valid.length > 1) {
      Arr.push(x);
      calculate.value += x;
    } else {
      calculate.value = calculate.value.slice(0, -1);
      calculate.value += valid;
      Arr.pop();
      Arr.push(valid);
    }
    valid = "";
  }

  console.log(valid);
  console.log(Arr);
}

function Equal() {
  let result = "";

  Arr.forEach((element, i) => {
    if (element == "/" || element == "*" || element == "%") {
      result = "";

      if (element == "%") {
        result += Arr[i - 1] % Arr[i + 1];
        Arr[i] = result;
        Arr.splice(i - 1, 1);
        Arr.splice(i + 1, 1);
        i--;
        console.log(result);
      }

      if (element == "/") {
        result += Arr[i - 1] / Arr[i + 1];
        Arr.splice(i - 1, 3, result);
        i--;
      } else {
        result += Arr[i - 1] * Arr[i + 1];
        Arr.splice(i - 1, 3, result);
        i--;
      }
      console.log(Arr);
      console.log(result);
    }
  });

  Arr.forEach((element, i) => {
    if (element == "+" || element == "-") {
      result = "";

      if (element == "+") {
        result += parseInt(Arr[i - 1]) + parseInt(Arr[i + 1]);
        Arr.splice(i - 1, 3, result);
        i--;
      } else {
        result += Arr[i - 1] - Arr[i + 1];
        Arr.splice(i - 1, 3, result);
        i--;
      }
    }
  });

  calculate.value = Arr[0];
}

function Delete() {
  let del = "";
  valid = "";
  calculate.value = calculate.value.slice(0, -1);

  del = Arr.pop();

  if (del.length > 1) {
    del = del.slice(0, -1);
    Arr.push(del);
  } else {
    del = "";
  }
  valid = del;
  console.log(Arr);
}

function Clear() {
  calculate.value = "";
  Arr = [];
  valid = "";
}