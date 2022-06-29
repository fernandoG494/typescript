interface Item {
    readonly id: number;
}

class Oranges implements Item{
    readonly id = 1;
    constructor(
        public country: string,
        public quantity: string
    ){}
}

class Pears implements Item{
    readonly id = 2;
    quality = '1A';
}

class Store <T extends Item>{
    items: T[] = [];
    
    addItem(item: T): void{
        this.items.push(item);
    }

    removeItem(item: T): void {
        this.items = this.items.filter(item => item.id !== item.id);
    }

    findById(id: number): T | undefined {
        return this.items.find(item => item.id === id);
    }
}

const orange = new Store<Oranges>();
orange.addItem(new Oranges('Spain', '100'));

const pear = new Store<Pears>();
pear.addItem(new Pears());

console.log(orange.items);
console.log(pear.items);