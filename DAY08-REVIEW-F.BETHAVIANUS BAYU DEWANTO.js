let myObj = [{
    name: "Avanza",
    brand: "Toyota",
    machine: "DOHC",
    cc: 1500
}, {
    name: "Supra",
    brand: "Toyota",
    machine: "V8",
    cc: 5000
}, {
    name: "ERTIGA",
    brand: "Suzuki",
    machine: "DOHC",
    cc: 1550
}]

let print = (data, callback) => {
    str = '';
    for (let index in data) {
        let tempData = data[index]
        const {
            name,
            brand,
            machine,
            cc
        } = tempData;
        if (callback) {
            if (callback(data[index])) {
                str += `${parseInt(index) + 1}. ${brand} ${name} with ${machine} ${cc.toLocaleString("id")}\n`;
            }
        } else {
            str += `${parseInt(index) + 1}. ${brand} ${name} with ${machine} ${cc.toLocaleString("id")}\n`;
        }
    }
    return str;
}
console.log(print(myObj, (myObj) => myObj.brand === "Toyota"));