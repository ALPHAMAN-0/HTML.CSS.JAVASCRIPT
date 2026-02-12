// ES6

class user{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    about(){
        return `${this.name} is ${this.age} years old.`;
    }
}