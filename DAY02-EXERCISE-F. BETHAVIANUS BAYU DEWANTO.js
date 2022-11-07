//question 1: Date
const date1 = new Date("10/14/2022"),
    date2 = new Date("10/11/2022");
let difference = Math.abs(date1 - date2), //Millisecond
    result = difference / (1000 * 60 * 60 * 24); //1 sec = 1000ms, 1 minute = 60 secs, 1 hour = 60 minutes, 1 day = 24 hours
console.log(result);

//question 2: odd even
let arr1 = [1, 2, 3, 4, 5, 6, 7],
    result1 = (arr) => {
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
console.table(result1(arr1));
//or
let number = 5,
    oddEvenResult = (number % 2 === 0) ? "Even" : "Odd";
console.log(oddEvenResult);
//question 3: prime check
let count = 100,
    arr2 = [];
for (let i = 0; i <= count; i++) {
    if (i <= 1) {
        arr2.push("Not a prime number")
    } else if (i % 2 === 0 && i != 2 || i % 3 === 0 && i != 3) {
        arr2.push("Not a prime number");
    } else if (i % 5 === 0 && i != 5 || i % 7 === 0 && i != 7) {
        arr2.push("Not a prime number");
    } else if (i / i === 1) {
        arr2.push("Prime number");
    }

}
console.table(arr2);
//or
if (count <= 1) {
    console.log("Not a prime number")
} else if (count % 2 === 0 && count != 2 || count % 3 === 0 && count != 3) {
    console.log("Not a prime number");
} else if (count % 5 === 0 && count != 5 || count % 7 === 0 && count != 7) {
    console.log("Not a prime number");
} else if (count / count === 1) {
    console.log("Prime number");
}
//question 4: sum number to N
let counting = 6,
    total = 1;
for (let i = 1; i < counting; i++) {
    total += (i + 1);
}
console.log(total);

//question 5: factorial
counting = 7;
for (let i = counting; i - 1 > 0; i--) {
    counting *= (i - 1);
}
console.log(counting);

//question 6: fibonacci
let arr3 = [1, 1];
counting = 7;
for (let i = 0; i < counting; i++) {
    arr3.push(arr3[i] + arr3[i + 1]);
}
console.table(arr3);