//question1
let firstObj = {
    a: 1,
    b: 2,
    c: 3
};
let secObj = {
    a: 1,
    b: 2,
    c: 3
};
let isEqual = (input1, input2) => {
    let result = true;
    for (let key in input1) {
        if (!(input2.hasOwnProperty(key) && input1[key] === input2[key])) {
            result = false;
        }
    }
    return result;
}
console.log(`are firstObj and secObj equal? ${isEqual(firstObj, secObj)}`);


//question2
let object1 = {
    a: 1,
    b: 2,
    d: 4
};
let object2 = {
    a: 1,
    d: 4,
};
let intersection = (input1, input2) => {
    let object = {}
    for (let key in input1) {
        if (input2.hasOwnProperty(key) && input1[key] === input2[key]) {
            object[key] = input1[key];
        }
    }
    return object
}
console.log(intersection(object1, object2));

//question 3
let array1 = [{
        name: "Student1",
        email: "student1@gmail.com"
    }, {
        name: "Student2",
        email: "student2@gmail.com"
    }],
    array2 = [{
        name: "Student1",
        email: "student1@gmail.com"
    }, {
        name: "Student3",
        email: "student3@gmail.com"
    }, {
        name: "Student2",
        email: "student2@gmail.com"
    }]
if (array1.length > array2.length) {
    max = array1.length;
} else {
    max = array2.length
}
let checkDuplicate = (input1, input2) => {
    let merge = input1.concat(input2);
    for (let i = 0; i < merge.length; i++) {
        for (let j = 1; j < merge.length; j++) {
            if (merge[i].name === merge[j].name && merge[i].email === merge[j].email) {
                merge.splice(j, 1);
            }
        }
    }

    return merge;
}
console.log(checkDuplicate(array1, array2));

//question 4
let exArray1 = [{
    name: "David",
    age: 21
}, {
    name: "Adi",
    age: 22
}];
let switchPropVal = (array) => {
    let foo;
    let keys = [];
    for (let i = 0; i < array.length; i++) {
        let data = array[i];
        for (let key in data) {
            foo = key;
            key = data[key];
            data[key] = foo;
            delete data[foo];
        }
        keys.push(data)
    }
    return keys;
}
console.log(switchPropVal(exArray1)) //berhasil switch namun object ordernya juga ikut kebalik, masih cari caranya

//question 5
let key = 6;
let factorialize = (num) => {
    if (num === 0) {
        return 1;
    }
    for (let i = num - 1; i >= 1; i--) {
        num *= i;
    }
    return num;
};
console.log(`faktorisasi dari ${key} adalah ${factorialize(key)}`);