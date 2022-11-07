//Question 1: area of rectangle
let width = 10,
    length = 4;
let area = width * length;
console.log(area);
//Question 2: perimeter of rectangle
let perimeter = 2 * (width + length);
console.log(perimeter);
//Question 3: diameter, area and circumference of circle
const PI = Math.PI;
let radius = 7,
    diameter = radius * 2,
    areaCircle = parseFloat((PI * Math.pow(radius, 2)).toFixed(2)),
    circumference = parseFloat((2 * PI * radius).toFixed(2));
console.log("Diameter ==>", diameter, "\nareaCircle ==>", areaCircle, "\ncircumference ==>", circumference);
//Question 4: find an angle if two angles are given
let allAngle = 180,
    a = 70,
    b = 80,
    result = allAngle - a - b;
console.log(result);
//Question 6: convert days to years and months
let days = 891;
let year = parseInt(days / 365);
days = days % 365;
let month = parseInt(days / 30);
days = days % 30;
let week = parseInt(days / 7);
days = days % 7;
console.log(`${year} years, ${month} months, ${week} weeks, ${days} days`);