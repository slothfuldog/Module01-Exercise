const foodQueue = require('./Day11-Exercise-queue');

const queue = new foodQueue();
queue.enQueue("Dumpling");
queue.enQueue("Seblak");
queue.enQueue("Bakso");
queue.enQueue("Mie Ayam");
queue.enQueue("Bubur");
queue.executeOrder();