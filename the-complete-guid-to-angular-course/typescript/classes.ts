class Person {
    id: Number;
    name: String;
    surname: String;

    constructor(id: Number, name: String, surname: String) {
        this.id = id;
        this.name = name;
        this.surname = surname;
    }

    static getInstance():Person {
        return new Person(null, null, null);
    }
}

let person = Person.getInstance();

person.name = "Maicon";
person.surname = "Fonseca Zanco";
person.id = 1;

console.log(person)
