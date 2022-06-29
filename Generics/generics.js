"use strict";
class Oranges {
    constructor(country, quantity) {
        this.country = country;
        this.quantity = quantity;
        this.id = 1;
    }
}
class Pears {
    constructor() {
        this.id = 2;
        this.quality = '1A';
    }
}
class Store {
    constructor() {
        this.items = [];
    }
    addItem(item) {
        this.items.push(item);
    }
    removeItem(item) {
        this.items = this.items.filter(item => item.id !== item.id);
    }
    findById(id) {
        return this.items.find(item => item.id === id);
    }
}
const orange = new Store();
orange.addItem(new Oranges('Spain', '100'));
const pear = new Store();
pear.addItem(new Pears());
console.log(orange.items);
console.log(pear.items);
