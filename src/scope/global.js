//variables

var a; //declarando
var b = 'b'; //declarando y asignando
b = 'bb'; //reasignacion
var a = 'aa'; // reedeclaracion

//GLOBAL SCOPE
var fruit = "Apple";
console.log(fruit);

function bestFruit(){
    console.log(fruit);
}

bestFruit();

function countries() {
    country = "Colombia"; 
    console.log(country);
}

countries();
console.log(country);

