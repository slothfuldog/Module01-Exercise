//Array Example
let arr = [1, 2, 3, 4, 5, 6, 7, 8]
//Title: duplicate map function which loops every value in array and make a new array with condition
//Input: 2 param which are array type data and callback function
let mapDuplicate = (array, cb) => {
    //process:
    //1. make a new varible with empty array
    let newArr = [];
    //2. loop array param from the first index to last index
    for (let i = 0; i < array.length; i++) {
        //3. in loop, check IF there is a callback function
        if (cb) {
            //4. IF callback funct exist check IF the function output is bollean return result in boolean
            if (typeof cb(array[i]) === "boolean") {
                newArr.push(cb(array[i]))
            }
            //5. IF not return the result
            else {
                newArr.push(cb(array[i]));
            }

        }
        //6. IF there is no callback function just push it the the new array variable
        else {
            newArr.push(array[i]);
        }
    }
    //Output: array
    return newArr;
}
console.log("boolean", mapDuplicate(arr, (arr) => arr >= 5));
console.log("not boolean", mapDuplicate(arr, (arr) => arr * 5));

//Title: duplicate filter function which loops every value in array and make a new array with condition
//Input: 2 param which are array type data and callback function
let filterDuplicate = (array, cb) => {
    //process:
    //1. make a new varible with empty array
    let newArr = [];
    //2. loop array param from the first index to last index
    for (let i = 0; i < array.length; i++) {
        //3. in loop, check IF there is a callback function
        if (cb) {
            //4. IF callback funct exist check IF the function output is boolean
            if (typeof cb(array[i]) === "boolean") {
                //5. IF so check IF the output of callback true push array value of current index
                if (cb(array[i])) {
                    newArr.push(array[i])
                }
            }
            //5. IF not return the result
            else {
                newArr.push(array[i]);
            }

        }
        //6. IF there is no callback function just push it the the new array variable
        else {
            newArr.push(array[i]);
        }
    }
    //Output: array
    return newArr;
}
console.log("boolean", filterDuplicate(arr, (arr) => arr >= 5));
console.log("not boolean", filterDuplicate(arr, (arr) => arr * 5));

//Title: findIndex function duplication
//input: 2 params which are array and callback function
let findIndexDuplicate = (array, cb) => {
    //process: 
    //1. make variable with number data type (value = 0)
    let index = 0;
    //2. loop array param from the begining to the end of index
    for (let i = 0; i < array.length; i++) {
        //3. in loop, check IF there is a callback function
        if (cb) {
            //4. IF callback funct exist check IF the function output is boolean
            if (typeof cb(array[i]) === "boolean") {
                if (cb(array[i])) {
                    //5. IF so check IF the output of callback true, reassign to variable with current index return variable
                    index = i;
                    return index;
                }
            }
            //6. ELSE return variable
            else {
                return index;
            }
        }
    }
    //Output: index variable with number type data
}
console.log(findIndexDuplicate(arr, (arr) => arr === 7));