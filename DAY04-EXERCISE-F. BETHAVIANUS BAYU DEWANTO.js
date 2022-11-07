//question 1
let pattern = (height) => {
    let print = ``;
    let count = 1;
    for (let i = 1; i <= height; i++) {
        for (let j = 1; j <= i; j++) {
            if (count < 10) {
                print += `0${count} `;
            } else {
                print += `${count} `
            }
            count++;
        }
        print += `\n`
    }

    return print;
}
let patternResult = pattern(10);
console.log(patternResult);
//question 2

let fizzBuzz = (n) => {
    let temp = [];
    for (let i = 0; i < n; i++) {
        if (i === 0) {
            temp.push(i);
        } else if (i % 3 === 0 && i % 5 === 0) {
            temp.push("FizzBuzz");
        } else if (i % 3 === 0) {
            temp.push("Fizz");
        } else if (i % 5 === 0) {
            temp.push("Buzz");
        } else {
            temp.push(i);
        }
    }
    return temp;
}
let fizzBuzzResult = fizzBuzz(100)
console.table(fizzBuzzResult);
//question 3
let bmi = (weight, height) => {
    let result = parseFloat((weight / Math.pow(height, 2)).toFixed(1));
    let str = "";
    if (result < 18.5) {
        str = "less weight";
    } else if (result >= 18.5 && result <= 24.9) {
        str = "ideal";
    } else if (result >= 25 && result <= 29.9) {
        str = "overweight";
    } else if (result >= 30 && result <= 39.9) {
        str = "very overweight";
    } else {
        str = "obesity"
    }
    return str;
}
let bmiResult = bmi(73, 1.7)
console.log(bmiResult);
//question 4
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let removeOdd = (arr) => {
    temp = [];
    for (let i = 0; i < nums.length; i++) {
        if (arr[i] % 2 === 0) {
            temp.push(arr[i]);
        } else {
            continue;
        }
    }
    return temp;
}
let result = removeOdd(nums);
console.log(result);
//question 5
let str = "Hello World ! tee";
let search = " ";
let splitDuplication = (string, search) => {
    let j = 0;
    let len = string.length;
    let result = [''];
    for (let i = 0; i < len; i++) {
        if (string[i] === search) {
            j++;
            result.push('');
        } else {
            result[j] += string[i];
        }
    }
    return result;
}
let resultSplit = splitDuplication(str, search);
console.log(resultSplit);