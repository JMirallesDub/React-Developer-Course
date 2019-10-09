
class Person {
    constructor(name = 'Anonymous', age = 0){
        this.name = name;
        this.age = age;
    };
    getGretting(){
        return `Hi. I am ${this.name}!`;
    };
    getDescription(){
        return `${this.name} is ${this.age} year(s) old.`
    };
};

class Student extends Person {
    constructor(name, age, major){
        super(name, age);
        this.major = major;
    };

    hasMajor(){
        return !!this.major;
    };

    getDescription(){
        let description = super.getDescription();

        if (this.hasMajor()) {
            description += `Their major is ${this.major}.`;
        }
        return description;      
        
    };
};

class Traveler extends Person {
    constructor(name,age, homeLocation){
        super(name, age);
        this.homeLocation = homeLocation;
    };

    
    getGreeting(){
        if (this.homeLocation){
        this.getGreeting += `I am visiting from ${this.homeLocation}.`;
        };
    };
};


// const me = new Student('Andrew Mead', 26, 'Computer Science');
const me = new Traveler('Andrew Mead', 26, 'Philadelphia');

console.log(me.getGretting());
console.log(me.getDescription());

const other = new Student();
console.log(other.getGretting());

