const {lowest, highest, average, concetenating, customSplit, addition, pushCheck, checkEven} = require("./DAY05-EXERCISE-F. BETHAVIANUS BAYU DEWANTO");

test("Test of Lowest number in array", () =>{
    expect(lowest([13, 2, 45, 40, 15])).toBe(2);
});
test("Test of Highest number in array", () =>{
    expect(highest([13, 2, 45, 40, 15])).toBe(45);
});
test("Test of Average number in array", () =>{
    expect(average([13, 2, 45, 40, 15])).toBe(23);
});
test("Test of Concetenating function", () =>{
    expect(concetenating(["Hello", "World", "Brothers!"])).toBe("Hello, World and Brothers!");
});
test("Test of Custom Split", ()=>{
    let splitArray = [];
    expect(customSplit("Hello World!", "rld")).toEqual(["Hello Wo", "!"]);
});
test("Test of Array Addition", () => {
    expect(addition([4, 5, 2, 2, 4], [3, 4, 2, 6, 7, 12])).toEqual([7, 9, 4, 8, 11, 12]);
});
test("Test of Push Check", ()=>{
    expect(pushCheck([1, 4, 5, "Sheesh", "Hi"], "Hi")).toEqual([1, 4, 5, "Sheesh", "Hi"]);
});
test("Test of Check Even", ()=>{
    expect(checkEven([1,2,3,4,5,6,7,8,9,10])).toEqual([2,4,6,8,10]);
})