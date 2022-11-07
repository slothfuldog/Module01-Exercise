//question 1
let num = 4;
for (let i = 1; i <= 10; i++) {
    console.log(`${num} x ${i} = ${num * i}`);
}
//question 2
let string = "Ata";
let newString = "";
for (let i = string.length - 1; i >= 0; i--) {
    newString += string[i];
}
if (newString.toLowerCase() === string.toLowerCase()) {
    console.log("Palindrome");
} else {
    console.log("Not Palindrome")
}
//qeustion 3
let centimeter = 1000000;
let kilometer = centimeter / 100000;
console.log(kilometer);
//question 4
let money = 1000;
let idr = money.toLocaleString("id", {
    style: "currency",
    currency: "IDR"
});
console.log(idr);
//or
let money2 = 1000;
let idr2 = `Rp. ${money2.toLocaleString("id")},00`;
console.log(idr2);
//question 5
let str = "Hello purwadhika",
    lower = str.toLowerCase(),
    search = "urwa",
    startingIndex = lower.indexOf(search),
    endIndex = startingIndex + search.length - 1;
let results = "";
if (lower.includes(search)) {
    results = str.slice(0, startingIndex) + str.slice(endIndex + 1, str.length + 1);
} else {
    results = "Cannot find the search keyword";
}
console.log(results)
//question 6
let newStr2 = "hello worlds ge";
let tryStr = "";
for (let i = 0; i < newStr2.length; i++) {
    let temp = newStr2[i];
    if (i === 0) {
        temp = newStr2[i].toUpperCase();
    } else if (newStr2[i - 1] === " ") {
        temp = newStr2[i].toUpperCase();
    }
    tryStr += temp;
}
console.log(tryStr);
//question 7
let reversedStr = "check";
let newStr1 = ""
for (let i = reversedStr.length - 1; i >= 0; i--) {
    newStr1 += reversedStr[i].toLowerCase();
}
console.log(newStr1)
//last question
let string1 = "tunak tunak tun";
let vokal = "";
let konsonan = "";
for (let i = 0; i < string1.length; i++) {
    if (string1[i] === "a" || string1[i] === "i" || string1[i] === "u" || string1[i] === "e" || string1[i] === "o") {
        if (vokal.includes(string1[i])) {
            continue;
        } else {
            vokal += string1[i].toLowerCase();
        }
    } else {
        if (konsonan.includes(string1[i])) {
            continue;
        } else if (string1[i] === " ") {
            continue;
        } else {
            konsonan += string1[i].toLowerCase();
        }
    }
};
console.log("Kalimat =", string1, "\nVokal =", vokal, "\nKonsonan =", konsonan);