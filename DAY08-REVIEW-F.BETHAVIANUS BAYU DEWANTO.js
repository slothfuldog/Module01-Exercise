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
    for (let key in data) {
        let tempData = data[key]
        const {
            name,
            brand,
            machine,
            cc
        } = tempData;
        if (callback) {
            if (callback(data[key])) {
                str += `${parseInt(key) + 1}. ${brand} ${name} with ${machine} ${cc.toLocaleString("id")}\n`;
            }
        } else {
            str += `${parseInt(key) + 1}. ${brand} ${name} with ${machine} ${cc.toLocaleString("id")}\n`;
        }
    }
    return str;
}
console.log(print(myObj, (myObj) => myObj.brand === "Toyota"));