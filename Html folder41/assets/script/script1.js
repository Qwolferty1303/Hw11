// 1
const person = {
    name: 'Alex',
    age: 24,
    call: function() {
        console.log(`${this.name} = ${this.age}`);
    }
}

person.call();

// 2
const person = {
    name: 'Alex',
    age: 24,
    call: function() {
        console.log(`${this.name} = ${this.age}`);
    }
}

const callMethod = person.call;
callMethod();

// 3
const person = {
    name: 'Alex',
    age: 24,
    city: 'Baku',
    call: function() {
        console.log(`${this.name} = ${this.age}`);
    }
}

for (const key in person) {
    console.log(key);
}

// 4
const person = {
    name: 'Alex',
    age: 24,
    city: 'Baku',
    call: function() {
        console.log(`${this.name} = ${this.age}`);
    }
}

for (const key in person) {
    console.log(person[key]);
}

// 5
const person = {
    name: 'Alex',
    age: 24,
    city: 'Baku',
    call: function() {
        console.log(`${this.name} = ${this.age}`);
    }
}

const personArray = Object.entries(person);
console.log(personArray);

// 6
const person = {
    name: 'Alex',
    age: 24,
    city: 'Baku',
    call: function() {
        console.log(`${this.name} = ${this.age}`);
    }
}

const personString = JSON.stringify(person);
console.log(personString);

// 7
let obj = {
    name: 'Alex',
    age: 24,
    isMarried: false,
    hasCar: false,
    hasJob: true,
    job: 'Programmer',
    childs: ['Hanz', 'Marry'],
    awards: {
        itMaster: 'Legend rang',
        driver: 'Fast man'
    }
}

function Person(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
}

const personInstance = new Person(obj.name, obj.age, obj.job);
console.log(personInstance);

// 8
// 1. Object()
// 2. Array()
// 3. String()
// 4. Number()
// 5. Boolean()
// 6. Function()
// 7. Date()
// 8. RegExp()
// 9. Error()

// Задача 9
function Person(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
}

const newPerson = new Person('John', 30, 'Teacher');
console.log(newPerson);
