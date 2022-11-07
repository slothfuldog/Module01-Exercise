//question 1
//with sort
let nums = [13, 2, 45, 40, 15],
    low = nums.sort((a, b) => {
        return a - b;
    })[0],
    high = nums.sort((a, b) => {
        return b - a;
    })[0];
let avg = (array) => {
    let total = 0;
    for (let i = 0; i < array.length; i++) {
        total += array[i];
    }
    return total / array.length;
};
console.log("Min: ", low, "Max: ", high, "Average: ", avg(nums));
//without
let lowest = (array) => {
    let low = 0;
    for (let i = 0; i < array.length; i++) {
        if (i === 0) {
            low = array[i];
        } else if (array[i] < low) {
            low = array[i];
        }
    }
    return low;
};
let highest = (array) => {
    let high = 0;
    for (let i = 0; i < array.length; i++) {
        if (i === 0) {
            high = array[i];
        } else if (array[i] > high) {
            high = array[i];
        }
    }
    return high;
};
let average = (array) => {
    let total = 0;
    for (let i = 0; i < array.length; i++) {
        total = total + array[i];
    }
    return total / array.length;
};
console.log("Min: ", lowest(nums), "Max: ", highest(nums), "Average: ", average(nums));

//question 2
let arrayString = ["Hello", "World", "Brothers!", "do", "re", "mi", "fa"];
let concetenating = (array) => {
    let string = "";
    for (let i = 0; i < array.length; i++) {
        if (i === array.length - 1) {
            string += ` and ${array[i]}`;
        } else if (i === 0) {
            string += array[i];
        } else {
            string += `, ${array[i]}`;
        }
    }
    return string;
}
console.log(concetenating(arrayString));
//question 3
let str = "Hello World Bro! molotov",
    search = "lo",
    splitArray = [];
let customSplit = (string, search) => {
    let deletedIndex = string.indexOf(search),
        tempString = string.slice(0, deletedIndex),
        deletedString = string.replace(`${tempString}${search}`, '');
    if (string.includes(search)) {
        splitArray.push(tempString);
        customSplit(deletedString, search);
    } else {
        splitArray.push(string);
    }
    return splitArray;
}
resultSplit = customSplit(str, search)
console.log(resultSplit);
//question 4
let array1 = [4, 5, 2, 2, 4],
    array2 = [3, 4, 2, 6, 7, 12]
let addition = (array1, array2) => {
    let len1 = array1.length,
        len2 = array2.length,
        max = 0,
        min = 0,
        total = 0,
        newArray = [];
    if (len1 > len2) {
        max = len1;
        min = len2;
    } else {
        max = len2;
        min = len1;
    }
    for (let i = 0; i < max; i++) {
        if (i < min) {
            total = array1[i] + array2[i];
            newArray.push(total);
        } else {
            if (len1 > len2) {
                total += array1[i];
                newArray.push(total);
            } else if (len2 > len1) {
                total += array2[i];
                newArray.push(total);
            }
        }
        total = 0;

    }
    return newArray;
}
console.log(addition(array1, array2));

//question 5
let newArray1 = [3, 5, "Hello", "Sheesh"];
let pushCheck = (array, element) => {
    let newArray = array;
    for (let i = 0; i < array.length; i++) {
        if (!array.includes(element)) {
            newArray.push(element);
        }
    }
    return newArray;
}
console.log(pushCheck(newArray1, 3));
//last question
let mixedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
let checkOddEven = (array) => {
    let newArray = []
    for (i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            newArray.push(array[i]);
        } else {
            continue;
        }
    }
    return newArray;
}
console.log("Array:", mixedArray, "\nOdd removed: ", checkOddEven(mixedArray));