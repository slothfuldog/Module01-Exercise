class Student {
    constructor(name, email, age, score) {
        this.name = name;
        this.email = email;
        this.age = age;
        this.score = score;
    }
}
let studentDbs = [
    new Student("Zeus", "Zeusxoxo@gmail.com", "11/23/1998", 79),
    new Student("Adiarto", "Adiwow@gmail.com", "01/20/1992", 98),
    new Student("Dominus", "dominusabangsa@gmail.com", "10/10/1989", 66),
    new Student("Dimitri", "dimitrixD@gmail.com", "04/02/1990", 70),
]
let calculating = (array) => {
    let currentYear = new Date().getFullYear(),
        highest = 0,
        lowest = 0,
        average = 0,
        score = {},
        age = {},
        result = {};
    for (let i = 0; i < array.length; i++) {
        let currentStudentAge = currentYear - new Date(array[i].age).getFullYear();
        array[i].age = currentStudentAge;
        if (i === 0) {
            highest = array[i];
            lowest = array[i];
        } else if (array[i].age > highest.age) {
            highest = array[i];
        } else if (array[i].age < lowest.age) {
            lowest = array[i];
        }
        average += array[i].age;
    }
    age = {
        highest: highest,
        lowest: lowest,
        average: average / array.length
    };
    average = 0;
    for (let i = 0; i < array.length; i++) {
        if (i === 0) {
            highest = array[i];
            lowest = array[i];
        } else if (array[i].score > highest.score) {
            highest = array[i];
        } else if (array[i].score < lowest.score) {
            lowest = array[i];
        }
        average += array[i].score;
    }
    score = {
        highest: highest,
        lowest: lowest,
        average: average / array.length
    }
    result = {
        score: score,
        age: age
    };
    return result;
}
console.log(calculating(studentDbs));

//question 2
class Product {
    constructor(name, price) {
        this.name = name
        this.price = price
    }
}

class Transaction {
    total = 0;
    products = [];
    addCart(product, quant) {
        this.products.push(product);
        for (let i in this.products) {
            if (this.products[i].quant === undefined) {
                this.products[i].quant = quant;
            }
        }
    }
    showTotal() {
        for (let i in this.products) {
            this.total += this.products[i].price * this.products[i].quant;
            let str1 = `You have bought a ${this.products[i].name}, which has a price: ${this.products[i].price} and quantity you desire is ${this.products[i].quant}`
            console.log(str1);
        }
        let str = `The total of your stuff is ${this.total}`;
        console.log(str);
    }
    checkOut(money) {
        let str = ''
        if (money === this.total) {
            str = `Thank you for your purchase, you have paid ${money.toLocaleString("id",{style: "currency", currency: "IDR"})}, come back again :)`;
            console.log(str);
            this.products = [];
            this.total = 0;
        } else if (money >= this.total) {
            str = `Thank you for your purchase, you have paid ${money.toLocaleString("id",{style: "currency", currency: "IDR"})}, your change (${(money - this.total).toLocaleString("id",{style: "currency", currency: "IDR"})}) will be sent\nto your bank account`;
            console.log(str);
            this.products = [];
            this.total = 0;
        } else {
            str = `Your payment is less than the total written, your money will be returned, and please input the correct payment`;
            console.log(str);
        }
    }

}

let product1 = new Product("Book", 21000);
let product2 = new Product("Sword", 120000);
let product3 = new Product("Cape", 32000);
let transCart = new Transaction()
transCart.addCart(product1, 32);
transCart.addCart(product2, 8);
transCart.addCart(product3, 2);
console.log(transCart);
transCart.showTotal();
transCart.checkOut(1796000);
