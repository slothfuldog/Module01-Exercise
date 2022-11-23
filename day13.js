//question 1
const checkWeekend = (date) =>{
    let days = date.getDay();
    let day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    if(days === 0 || days === 6){
        return `It is ${day[days]}, so it is Weekend`;
    }
    else{
        return `It is ${day[days]}, so it is not Weekend`;
    }
}
console.log(checkWeekend(new Date("11/13/2022")));
//question 2 GCD
const checkGCD = (num1, num2) => {
    let result = Math.min(num1, num2);
    while(result > 0){
        if(num1% result === 0 && num2 % result === 0){
            break;
        }
        else{
            result--;
        }
    }
    return result;
}
console.log(checkGCD(2520 , 2646));

const checkLCM = (num1, num2) => {
    let small = Math.min(num1, num2);
    let large = Math.max(num1, num2);
    let result = large;
    do{
        if(result % small === 0){
            return result;
        }
        else{
            result += large;
        }
    }while(true);
}
console.log(checkLCM(1353, 1716));

const checkChar = (string) => {
    let arrString = string.toLowerCase().split('');
    let arrSorted = arrString.sort((a,b) => {
        if(a < b) {
            return -1;
        }    
        else{
            return 1;
        }
    }
        );
    let result = 0;
    let count = 0;
    let character = '';
    for(let i = 0; i < arrString.length; i++){
        if(i === 0){
            result = 1;
        }
        else if(arrSorted[i - 1] === arrSorted[i]){
            count++
            if(count >= result){
                result = count;
                character = arrSorted[i];
            }
        }
        else{
            count = 0;
        }
    }
    return character;
}
console.log(checkChar("Sorrow"));

const sortedString = (string) =>{
    let arrString = string.split('');
    let arrSorted = arrString.sort((a,b) => {
        if(a < b) {
            return -1;
        }    
        else{
            return 1;
        }
    })
    return arrSorted;
};
console.log(`With Sort`,sortedString("ulala"));

const woSortString = (string) => {
    let arrString = string.split('');
    for(let i = 0; i < arrString.length; i++){
        for(let j = 0; j < arrString.length; j++){
            if(arrString[j] > arrString[i]){
                let a = arrString[i];
                arrString[i] = arrString[j];
                arrString[j] = a;
            }
        }
    }
    return arrString;
}
console.log(`Without sort`, woSortString("ulala"));

const minDate = (date) => {
    let dateSorted = date.sort((a, b) => a - b);
    for(let i = 0; i < dateSorted.length; i++){
        dateSorted[i] = dateSorted[i].toLocaleDateString('en');
    }
    return dateSorted;
}
console.log(minDate([new Date("11/13/2022"), new Date("10/14/2022"), new Date("12/15/2022"), new Date("11/11/2022")]));

const sumElements = (array) =>{
    let result = 0;
    for(let i = 0; i < array.length; i++){
        for(let j = 0; j < array[i].length; j++){
            result += array[i][j];
        }
    }
    return result;
}
console.log(sumElements([[3,1,2,4], [5,5]]));

const longComPre = (array) => {
    let size = array.length;
        if (size == 0)
            return "";
   
        if (size == 1)
            return array[0];
   
        array.sort();
        let end = Math.min(array[0].length, array[size-1].length);
        let i = 0;
        while (i < end && array[0][i] == array[size-1][i] )
            i++;
   
        let pre = array[0].substring(0, i);
        return pre;
};
console.log(longComPre(["Acknowledge", "Ack", "Ace", "According"]));

const half = (array) => {
    return array.filter((i, idx) => idx < Math.ceil(array.length / 2))
}
console.log(half([1,2,4,3,5]));

const getDaysinMont = (month, year)=>{
    let days = new Date(year, month, 0).getDate();
    return days;
}
console.log(getDaysinMont(3, 2022));

const daysPassed = (date) => {
    let year = date.getFullYear();
    let firstDate = new Date(`1/1/${year}`);
    let difference = Math.abs(date - firstDate) //Millisecond
    return difference / (1000 * 60 * 60 * 24);
};
console.log(daysPassed(new Date("12/31/2022")));

const calculateAge = (dateBorn, dateNow) =>{
    let year = dateNow.getFullYear() - dateBorn.getFullYear();
    let month = dateNow.getMonth() - dateBorn.getMonth();
    if (month < 0 || (month === 0 && dateNow.getDate() < dateBorn.getDate())) 
    {
        year--;
    }
    return year;
}
console.log(calculateAge(new Date("11/16/1997"), new Date("11/16/2022")));