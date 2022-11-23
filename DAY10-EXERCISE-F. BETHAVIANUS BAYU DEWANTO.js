//Title: excel title converter, example input == AA output == 27
//problem: total alphabet ada 26, untuk lengthnya bertambah untuk pertama dikalikan 26 dan seterusnya, jadi misal input CB 
//rumusnya karena length 1 ada 26 dan C nilainya 3 dan B adalah 2 jadi: 3*26 + 2
//kesimpulan convert alphabet ke decimal dulu baru gunakan rumus diatas

//Input: 1 params berbentuk string
let excelConverter = (char) => {
    //process: 
    //1. buat variable yang akan jadi result dengan value 0
    let result = 0;
    //2. buat loop yang berpatokan dengan length paramnya
    for (let i = 0; i < char.length; i++) {
        //3. Berikan nilai masing - masing length, jika lengthnya ada 2 berarti untuk index 0nya bernilai 26 dan dikalikan nilai alphabet jika lengthnya 1 berarti nilainya 0
        result *= 26;
        //4. convert char ke decimal dan tambahkan dengan variable
        result += char[i].charCodeAt(0) - "A".charCodeAt(0) + 1;
    }
    //5. return variable
    return result;
}
//output: number
console.log(excelConverter("BB"));

//title: check apakah value tidak muncul dua kali atau lebih
//Input array variable
let nums = [1, 1, 2, 3, 3, 4, 5, 5];
let checkTwice = (array) => {
    //process:
    //1. buat variable untuk array baru
    //2. buat fungsi yang dapat check setiap value di array dan memasukan value ke array baru dengan kondisi tertentu
    //3. masukan kondisi yang mengecheck awal index tersebut sama dengan akhir index tersebut, jika tidak sama berarti ada duplikasi pada value dalam array tersebut
    let newArr = array.filter((num) => array.indexOf(num) === array.lastIndexOf(num));
    //4. return variable
    return newArr;
}
//output: array
console.log(checkTwice(nums));

let stringSatu = "dog";
let stringDua = "god";
let checkAnagram = (string1, string2) => {
    let strArray1 = string1.split("");
    let strArray2 = string2.split("");
    let sortedArray1 = strArray1.sort((a, b) => {
        if (a < b) {
            return -1;
        } else {
            return 1;
        }
    })
    let sortedArray2 = strArray2.sort((a, b) => {
        if (a < b) {
            return -1;
        } else {
            return 1;
        }
    })
    let result = false;
    sortedArray1.forEach((value, i) => {
        if (value == sortedArray2[i]) {
            result = true;
        } else {
            result = false;
        }
    })
    return result
}
console.log(checkAnagram(stringSatu, stringDua))

let steps = [1,2]
let climbingStair = (n) => {
    let result = new Array(n + 1);
    result.fill(0);
    result[0] = 1;
    for (let i = 1; i <= n; i++) {
        for (let j = 0; j < steps.length; j++) {
            if (i >= steps[j]) {
                result[i] += result[i - steps[j]];
            }
        }
    }
    return result[n];

}
console.log(`Total ways: ${climbingStair(4)}`);