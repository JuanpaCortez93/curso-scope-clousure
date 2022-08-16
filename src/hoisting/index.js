var nameOfDog; //HOISTING

console.log(nameOfDog);
var nameOfDog = "Elmo";

var elmo;
nameOfDog();

function nameOfDog(){
    console.log(`El mejor perro es $${elmo}`);
}

var elmo = "Elmo";