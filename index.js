// function setTimeout(callback, delay) {
//   console.log("Function setTimeout() is called");

//   callback();

//   console.log(
//     "This line will be executed after the callback function is called"
//   );
// }

// Bir ATM sirasina girdigin zaman sirasini beklerken kendi isini yapmayi bunu yapmak senkron bir islemdir. Sirayi beklerken kendi isini yapmak asenkron bir islemdir.

const print = function () {
  console.log("Function print() is called");
};

setTimeout(print, 0);

const number1 = 3;
const number2 = 5;

let result;

function add(num1, num2) {
  console.log("Function add() is called");

  return num1 + num2;

  console.log("This line will never be executed");
}

result = add(number1, number2);

console.log(result);

function multiply(num1, num2, callback) {
  if (callback && typeof callback === "function") {
    callback();
  } else {
    console.log("Callback is not a function");
  }

  console.log("Function multiply() is called");

  return num1 * num2;
}

const timeOut = () => {
  setTimeout(() => {
    console.log("Function setTimeout() is called");
  }, 4000);
};

result = multiply(number1, number2, timeOut);

console.log(result);

function isEven(number1) {
  if (number1 % 2 === 0) {
    return true;
  }
  return false;
}

const mod = isEven(result);

console.log(mod);

function isOdd(number1) {
  if (number1 % 2 === 1) {
    return true;
  }
  return false;
}

function conversion(name, message) {
  return setTimeout(() => {
    console.log("Hello", name, message);
  }, 1000);
}

conversion("Bartu", "Welcome aboard! You are now a member of our team");

const Oktay = conversion(
  "Oktay",
  "Welcome aboard! You are now a member of our team"
);

// 'Push' method most used javaScript method.

const fiboArray = [1, 1];

function fibonacci(stepPoint) {
  // Kac adet fibonacci sayisi uretecegimizi bildigimiz icin for loop kullanabiliriz.

  for (let i = 0; i < stepPoint; i++) {
    const fib =
      fiboArray[fiboArray.length - 1] + fiboArray[fiboArray.length - 2];
    fiboArray.push(fib);
    console.log(fib);
  }
}

// fibonacci(10);
console.log(fiboArray);

// [ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89 ]

function fibo(stopPoint) {
  // Hangi sayida duracagini bildigimiz icin while loop kullanabiliriz.

  let lastNumber = 1;
  let tempNumber = 0;
  let fiboArray = [0];

  while (lastNumber < stopPoint) {
    fiboArray.push(lastNumber);

    fiboArray.shift();

    // lastNumber = 55
    // tempNumber = 34
    lastNumber += tempNumber;
    // lastNumber = 89
    // tempNumber = 34
    tempNumber = lastNumber - tempNumber;
    // lastNumber = 89
    // tempNumber = 55

    console.log("Last Number: ", lastNumber);
    console.log("Temp Number: ", tempNumber);
  }
  console.log(fiboArray);
}

fibo(1000);

// Map method

const students = ["Can", "Oktay", "Gizem", "Ozgur", "Mustafa", "Alper"];

// Shift method

students.shift(); // ilk elemani siler

// Pop method

students.pop(); // son elemani siler
students[0] = "Merve";
students[students.length] = "Ozge"; // atama islemi
console.log(students);

// Splice method

students.splice(students.length - 2, 2);

// Splice diziden eleman silmek icin kullanilir. 2 adet parametre alir. 1. parametre hangi indexden baslayacagini, 2. parametre kac eleman silinecegini belirtir.

console.log(students);

// Concat method

const lateStudents = ["Merve", "Taha"];
const allStudents = students.concat(lateStudents);
console.log(allStudents);

const people = allStudents.concat("Mustafa", ["John", "Linus"], lateStudents);

// concat aslinda merge islemi yapar. 2 arrayi birlestirir.

console.log(people);

const studentsWithId = students.map((student, index) => {
  return { id: index, name: student };
});

console.log(studentsWithId);

// Unshift method

students.unshift("Bartu");

// console.clear();
console.log(students);
