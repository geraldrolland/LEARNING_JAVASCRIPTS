const add = (a, b) => {
    return a + b
}

const sub = (a, b) => {
    return a - b
}

const name = "gerald";

class Car{
    constructor(brand, name) {
        this.brand = brand;
        this.name = name
    }
}

export {add, sub, Car, name}