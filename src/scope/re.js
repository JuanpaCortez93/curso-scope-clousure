var firstName; //Declaración -> Undefined
firstName = "Oscar";

console.log(firstName);

var lastName="David"; //declarar/asignar
lastName = "Ana";     //reasignar
console.log(lastName);

var secondName="David"; //declarar/asignar
var secondName="Ana";   //reasignar
console.log(secondName);

//Con var se puede reedeclarar y reeasignar

let fruit = "Apple";
fruit = "Kiwi";

//Con let no se puede redeclarar pero si reasignar

const animal = "dog";
console.log(animal);

//Con const no se puede ni reedeclarar ni reasignar. En caso de arreglos u objetos si es posible usar los métodos (push o pop).
