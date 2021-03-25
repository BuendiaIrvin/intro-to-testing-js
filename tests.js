// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});



describe('sayHello', function() {
    it('should be a defined function', function() {
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called', function() {
        expect(typeof sayHello()).toBe("string");
    });

    it("should never return 'undefined' when called", function() {
        expect(sayHello()).not.toBe(undefined);
    });
    it('should return "Hello, Jane!" when passed the input Jane', function() {
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    });
    it('should return "Hello, Alex!" when passed the input Alex', function() {
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
    it('should return "Hello, Pat!" when passed the input Pat', function() {
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });
    });
    // it('should return "Hello, World!" when called', function() {
    //     expect(sayHello()).toBe("Hello, World!");
    // });
    // it('should return "Hello, World" when passed the input true', function() {
    //     expect(sayHello(true)).toBe("Hello, World!");
    // });

describe('isFive', function() {
    it('should be a defined function', function () {
        expect(typeof isFive).toBe('function');
    });
    it("should never return 'undefined' when called", function () {
        expect(isFive()).not.toBe(undefined);
    });
    it("Should return true when passed the input 5", function () {
        expect(isFive(5)).toBe(true)
    });
    it("Should return boolean no matter what input is passed", function () {
        expect(typeof isFive()).toBe("boolean")
    });
    it("should return false when passed the input 3", function () {
        expect(isFive(3)).toBe(false);
    });
    it('should return false when passed the input 6', function () {
        expect(isFive(6)).toBe(false);
    });
    it("should return false when passed the input five", function () {
        expect(isFive("five")).toBe(false);

    });


    describe("addOne", function () {
        it('should be a defined function', function () {
            expect(typeof addOne).toBe("function");
        });
        it('should return a number when called', function () {
            expect(typeof addOne()).toBe("number");
        });
        it('should return the number 3 when passed the argument of the number 2', function () {
            expect(addOne(2)).toBe(3);
        });
        it("should return the number -43 when passed the argument of the number -44", function () {
            expect(addOne(-44)).toBe(-43);
        });
        it('should return the number 18 when passed the argument of the number 17', function () {
            expect(addOne(17)).toBe(18);
        });
        it("should return the number -2.14 when passed the argument of the number -3.14", function () {
            expect(addOne(-3.14)).toBe(-2.14);
        });
        it('should return the number 34 when passed the argument of the number 33', function () {
            expect(addOne(33)).toBe(34);
        });
        it("should return the number 4.58 when passed the argument of the number 3.58", function () {
            expect(addOne(3.58)).toBe(4.58);
        });
        it("should return NaN when passed the string 'Hakeem Olajuwon.'", function () {
            expect(Number.isNaN(addOne("Hakeem Olajuwon"))).toBe(true);
        });
        it("should return NaN when passed the boolean true", function () {
            expect(Number.isNaN(addOne(true))).toBe(true);
        });
        it("should return NaN when passed the array [1,2,3]", function () {
            expect(Number.isNaN(addOne([1, 2, 3]))).toBe(true);
        });
    });
});


// Start with the smallest tests first.
// Write just enough code to green the test
// Build up functionality one small piece at a time.
// Commit your work to git at each step.
// Write each assertion, confirm the test fails, write only enough code to green that specific test, refactor, then repeat.
// Remember to add and then "green" one test at a time. That's part of the fundamental approach of TDD.
// Assert that:
// isVowel always returns a boolean
// isVowel("a") returns true
// isVowel("A") returns true
// isVowel("y") returns false
// isVowel(4) returns false
// isVowel(true) or isVowel(false) both return false
// isVowel("banana") returns false
// isVowel() returns false
// Refactor when appropriate and possible.
// Repeat until the tests are robust and the function works as intended.
// Commit your work to git and push to GitHub before moving forward.


describe('isEven', function() {
    it('should be a defined function', function () {
        expect(typeof isEven).toBe('function');
    });
    it("should never return 'undefined' when called", function () {
        expect(isEven()).not.toBe(undefined);
    });
    it("Should return boolean no matter what input is passed", function() {
        expect(typeof isEven()).toBe("boolean")
    });
    it("should return true when passed the input 2", function() {
        expect(isEven(2)).toBe(true)
    })
    it("should return true when passed the input -4", function() {
        expect(isEven(-4)).toBe(true)
    })
    it("should return false when passed the input 3", function() {
        expect(isEven(3)).toBe(false)
    })
    it("should return false when passed the input banana", function() {
        expect(isEven("banana")).toBe(false)
    })
    it("should return true when passed the string of 8", function() {
        expect(isEven("8")).toBe(true)
    });
    it("should return false when passed the input of Infinity", function() {
        expect(isEven(Infinity)).toBe(false)
    });
    it("should return false when passed the boolean of true", function() {
        expect(isEven(true)).toBe(false)
    });
    it("should return false when passed the boolean of false", function() {
        expect(isEven(false)).toBe(false)
    });
    it("should return false when passed without an argument", function() {
        expect(isEven()).toBe(false)
    });

});

// Exercise #12 Test Drive an isVowel function
// Start with the smallest tests first.
// Write just enough code to green the test
// Build up functionality one small piece at a time.
// Commit your work to git at each step.
// Write each assertion, confirm the test fails, write only enough code to green that specific test, refactor, then repeat.
// Remember to add and then "green" one test at a time. That's part of the fundamental approach of TDD.
// Assert that:
// isVowel always returns a boolean
// isVowel("a") returns true
// isVowel("A") returns true
// isVowel("y") returns false
// isVowel(4) returns false
// isVowel(true) or isVowel(false) both return false
// isVowel("banana") returns false
// isVowel() returns false
// Refactor when appropriate and possible.
// Repeat until the tests are robust and the function works as intended.
// Commit your work to git and push to GitHub before moving forward.

describe('isVowel', function() {
    it('should be a defined function', function () {
        expect(typeof isVowel).toBe('function');
    });
    it("should never return 'undefined' when called", function () {
        expect(isVowel()).not.toBe(undefined);
    });
    it("Should return boolean no matter what input is passed", function() {
        expect(typeof isVowel()).toBe("boolean")
    });
    it('should return true when passed the string "a"', function() {
        expect(isVowel("a")).toBe(true)
    });
    it('should return true when passed the string "A"', function() {
        expect(isVowel("A")).toBe(true)
    });
    it('should return false when passed the string "y"', function() {
        expect(isVowel("y")).toBe(false)
    });
    it('should return false when passed the input 4', function() {
        expect(isVowel(4)).toBe(false)
    });
    it("should return false when passed the boolean of true", function() {
        expect(isVowel(true)).toBe(false)
    });
    it("should return false when passed the boolean of false", function() {
        expect(isVowel(false)).toBe(false)
    });
    it("should return false when passed the input banana", function() {
        expect(isVowel("banana")).toBe(false)
    })
    it("should return false when passed without an argument", function() {
        expect(isVowel()).toBe(false)
    });
});

// expect(number.isNaN

