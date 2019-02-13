const log = console.log;

class Parent {
    property1: 1;
    property2: 2;
    property3: 3;
}

class Parent2 extends Parent {
    property12: 12;
    property22: 22;
    property32: 32;
    showName(person:idealObject){return person;}
}

function classDecorator<T extends {new(...args:any[]):{}}>(constructor:T) {
    return class classDecorator1 extends constructor {
        newProperty = "new property";
        hello = "override";
    }
}

@classDecorator
class Parent3 {
}

interface idealObject {
    name : string
    description : string
}

let thePerson = new Parent2();
log(thePerson.showName({name:"name",description:"description"}));
log(thePerson);

let thePerson3 = new Parent3();
log(thePerson3);
