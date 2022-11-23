const {oddEvenResult, fibonacci, sumNumToN, checkPrimeNum, factorial} = require("./DAY02-EXERCISE-F. BETHAVIANUS BAYU DEWANTO");

test("Test of Odd or Even", () =>{
    expect(oddEvenResult(5)).toBe("Odd");
});
test("Test of Check Prime Number", () => {
    expect(checkPrimeNum(5)).toBe("Prime number");
});
test("Test of Sum number to N", () => {
    expect(sumNumToN(25)).toBe(325);
});
test("Test of factorial", () =>{
    expect(factorial(5)).toBe(120);
});
test("Test of Fibonacci", () =>{
    expect(fibonacci(4)).toBe(5);
});