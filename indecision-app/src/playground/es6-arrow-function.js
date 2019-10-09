const square = function (x) {
    return x * x;
};

const square2 = (x) => {
    return x * x;
};

const square3 = (x) => x * x;

console.log(square3(5));


const firstName = (fullName) => fullName.split(' ')[0];

console.log(firstName('Jose Miralles'));

const user = {
    name: 'Andrew',
    cities: ['Philadelphia', 'New York', 'Dublin'],
    printPlacesLived() {
        var that = this;
        this.cities.forEach((city) => {
            console.log(this.name + ' has lived in ' + city);
        });
    }
};

user.printPlacesLived();

const multiplier = {
    numbers: [1, 2, 3],
    multiplyBy: 2,
    multiply(){
        return this.numbers.map((number) => number * this.multiplyBy);
    }
};

console.log(multiplier.multiply());