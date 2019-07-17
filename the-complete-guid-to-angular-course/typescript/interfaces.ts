interface Comparable {
    compareTo(o: Object): Number;
}

class Person implements Comparable {
    id: Number;
    name: String;
    surname: String;

    constructor(id: Number, name: String, surname: String) {
        this.id = id;
        this.name = name;
        this.surname = surname;
    }

    static getInstance(): Person {
        return new Person(null, null, null);
    }

    compareTo(o: Object): Number {
        if (!o) {
            return -1;
        }

        if (!(o instanceof Person)) {
            return -1;
        }

        let person2: Person = <Person>o;

        if (this.id == person2.id) {
            return 0;
        } else if (this.id > person2.id) {
            return 1;
        } else {
            return -1;
        }
    }
}

let person1: Comparable = new Person(1, null, null);
let person2: Comparable = new Person(2, null, null);

console.log(person1.compareTo(person1));
console.log(person1.compareTo(person2));
console.log(person2.compareTo(person1));