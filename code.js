// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}
function sayHello(input) {
    return "Hello, " + input + "!";
}

// isFive
function isFive(input) {
    var fiveNum = parseFloat(input);
    if (fiveNum == 5) {
        return true;
    } else {
        return false;
    }
}
console.log(isFive(6))
console.log(isFive("6"))

// addOne
function addOne(input) {
    if (typeof input !== "number") {
        return NaN;
    } else {
        return input + 1;
    }
}


// isEven

function isEven(input) {
    var evenNum = parseFloat(input)
   if (evenNum % 2 === 0) {
       return true;
   } else {
       return false;
   }
}

console.log(isEven(2))
console.log(isEven(3))
console.log(isEven("8"))
console.log(isEven())


// isVowel

function isVowel() {
    return
}


