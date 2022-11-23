//Question 1: area of rectangle
// let width = 10,
//     length = 4;
let areaRectangle = (width, length) => {
    return width * length;
}
//Question 2: perimeter of rectangle
let perimeterRectangle = (width, length) => {
    return 2 * (width + length)
}
//Question 3: diameter, area and circumference of circle

// let radius = 7,
//     diameter = radius * 2,
//     areaCircle = parseFloat((PI * Math.pow(radius, 2)).toFixed(2)),
//     circumference = parseFloat((2 * PI * radius).toFixed(2));
let diameter = (radius) => {
    return radius * 2;
}
let areaCircle = (radius) => {
    const PI = Math.PI;
    return parseFloat((PI * Math.pow(radius, 2)).toFixed(2));
}
let circumference = (radius) => {
    const PI = Math.PI;
    return parseFloat((2 * PI * radius).toFixed(2));
}
//Question 4: find an angle if two angles are given

let findAnAngle = (a, b) => {
    const allAngle = 180;
    return allAngle - a - b
};
//Question 6: convert days to years and months
let daysConverter = (days) => {
    let year = parseInt(days / 365);
    days = days % 365;
    let month = parseInt(days / 30);
    days = days % 30;
    let week = parseInt(days / 7);
    days = days % 7;
    return `${year} year ${month} month ${week} week ${days} day`;
}
let dateDiff = (date1, date2) => {
    let difference = Math.abs(date1 - date2) //Millisecond
    return difference / (1000 * 60 * 60 * 24);
}
module.exports = {
    areaRectangle,
    areaCircle,
    diameter,
    perimeterRectangle,
    circumference,
    findAnAngle,
    daysConverter,
    dateDiff
};