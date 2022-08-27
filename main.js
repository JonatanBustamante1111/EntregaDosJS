let numberPersons = parseInt(prompt("ingrese el numero de personas que se van a registrar"))
let sum = 0;

// la funcion averageAge saca el promedio de las edad guardadas 
let averageAge = (sum,numberPersons) => parseInt(sum/numberPersons);

// pinta en pantalla el valor promedio de las edades
const printOfScreen = (sum,numberPersons)=>{
    for (let i = 0; i < numberPersons; i++) {
        const nombre = prompt("ingrese su nombre")
        const age = parseInt(prompt("ingrese su edad"));
        // a la variable suma le sumo lo que tiene guardado + la edad de la persona
        sum = sum + age;
    }
    alert(`el promedio de edades ingresadas es de ${averageAge(sum,numberPersons)}`);
}
// hago la invocacion de la funcion print
printOfScreen(sum,numberPersons);