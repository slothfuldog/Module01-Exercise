const {areaRectangle, areaCircle, diameter, perimeterRectangle, circumference, findAnAngle, daysConverter, dateDiff} = require("./DAY01-EXERCISE-F. BETHAVIANUS BAYU DEWANTO");

test("Test of Area Rectangle", () =>{
    //correct
    expect(areaRectangle(10, 5)).toBe(50);
});
test("Test of Perimeter Rectangle", () =>{
    expect(perimeterRectangle(10, 5)).toBe(30);
});
test("Test of Diameter", () =>{
    expect(diameter(7)).toBe(14);
});
test("Test of areaCircle", () =>{
    expect(areaCircle(7)).toBe(153.94);
});
test("Test of Circumeference", () =>{
    expect(circumference(7)).toBe(43.98);
});
test("Test of findAngle", () =>{
    expect(findAnAngle(40, 50)).toBe(90);
});
test("Test for Day converter", ()=>{
    expect(daysConverter(377)).toBe(`1 year 0 month 1 week 5 day`);
});
test("Test for Date Difference", () =>{
    expect(dateDiff(new Date("10/14/2022"), new Date("10/12/2022"))).toBe(2);
})
//.toBe(value): apakah value yang diinginkan sesuai atau tidak, untuk primitive
//.toEqual(value): non-primitive

//to run 'jest --config=config.json file.test'