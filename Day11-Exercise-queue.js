class foodQueue {
    constructor(name) {
        this.name = name;
        this.order = [''];
    }
    enQueue(name) {
        if(this.order[0] === ''){
            this.order[0] = name;
        }
        else{
            this.order.push(name);
        }
    }
    deQueue() {
        if(this.order[0] !== ''){
            return this.order.shift();
        }
    }
    queuingOrder(element) {
        return new Promise((resolve, reject) => {
            if (this.order[0] !== '') {
                resolve(element);
            } else{
                reject(`There is no order!`);
            }
        })
    }
    showOrder(){
        if(this.order[0] === '' || this.order.length === 0){
            console.log(`No order yet.`);
        }
        else{
            let orders = this.order.join(', ');
            console.log(`There are the orders: ${orders}`);
        }
    }
    executeOrder() {
        let count = 0;
        let len = this.order.length;
        while (count < len) {
            let time = count + 1;
            let shifted = this.deQueue();
            let random = Math.ceil((Math.random() * (10000 - 1000)) + 1000)
            setTimeout(() => this.queuingOrder(shifted).then((result) => {
                console.log(`Queue-${time} ${result} ORDER COMPLETE ✔ process => ${parseFloat((random/1000).toFixed(2))} seconds.`);
            }).catch((error) => console.log(error)), random);
            count++;
        }
        if(this.order.length === 0){
            setTimeout(() => {
                console.log(`There is no more order!`);
                return this.order = [''];
            }, 10000)
        }
    }
}
module.exports = foodQueue;