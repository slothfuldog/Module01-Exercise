
//question 2: odd even
let result1 = (arr) => {
        let newArr = [];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] % 2 === 0) {
                newArr.push("Even");
            } else {
                newArr.push("Odd");
            }
        }
        return newArr;
    }
//or
let oddEvenResult = (number) =>{
    if(number % 2 === 0){
        return "Even";
    }
    else{
        return "Odd";
    }
};
//question 3: prime check
// let count = 100,
//     arr2 = [];
// for (let i = 0; i <= count; i++) {
//     if (i <= 1) {
//         arr2.push("Not a prime number")
//     } else if (i % 2 === 0 && i != 2 || i % 3 === 0 && i != 3) {
//         arr2.push("Not a prime number");
//     } else if (i % 5 === 0 && i != 5 || i % 7 === 0 && i != 7) {
//         arr2.push("Not a prime number");
//     } else if (i / i === 1) {
//         arr2.push("Prime number");
//     }u
// }
// console.table(arr2);
//or
let checkPrimeNum = (num) =>{
    let str = ""
    if (num <= 1) {
        str = "Not a prime number"
    } else if (num % 2 === 0 && num != 2 || num % 3 === 0 && num != 3) {
        str = "Not a prime number";
    } else if (num % 5 === 0 && num != 5 || num % 7 === 0 && num != 7) {
        str = "Not a prime number";
    } else if (num / num === 1) {
        str = "Prime number";
    }
    return str;
}
//question 4: sum number to N
let sumNumToN = (counts) =>{
    let total = 1;
    for (let i = 1; i < counts; i++) {
        total += (i + 1);
    }
    return total;
}

//question 5: factorial

let factorial = (num) =>{
    for (let i = num; i - 1 > 0; i--) {
        num *= (i - 1);
    }
    return num;
}
//question 6: fibonacci
let fibonacci = (counts, array) => {
    array = [1, 1];
    for (let i = 2; i <= counts; i++) {
        array.push(array[i - 1] + array[i - 2]);
    }
    return array[counts];
}
console.log(fibonacci(4));

module.exports = {oddEvenResult, fibonacci, sumNumToN, checkPrimeNum, factorial}