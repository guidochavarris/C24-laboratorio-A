/*-	Desarrolle una función que permita determinar cuál de tres parámetros que se le proporcione a la función es mayor.*/

let numero1, numero2, numero3, mayor;

    numero1 = parseInt(prompt("ingrese el numero"))
    numero2 = parseInt(prompt("ingrese el numero"))
    numero3 = parseInt(prompt("ingrese el numero"))

    if (numero1 >= numero2 && numero1 >= numero3) {
        mayor = numero1
        //return console.log("el numero mayor es" + numero1)
    } else if (numero2 >= numero1 && numero2 >= numero3) {
        mayor = numero2
        //return console.log("el numero mayor es" + numero1)
    }else {
        mayor = numero3
        
        //return console.log("el numero mayor es" + numero1)
    }
     console.log("El numero mayor es " + mayor)

/*
function determinar_mayor() {
    let numero1, numero2, numero3, mayor;

    numero1 = parseInt(prompt("ingrese el numero"))
    numero2 = parseInt(prompt("ingrese el numero"))
    numero3 = parseInt(prompt("ingrese el numero"))

    if (numero1 > numero2 && numero1 > numero3) {
        mayor = numero1
        //return console.log("el numero mayor es" + numero1)
    } else if (numero2 > numero1 && numero2 > numero3) {
        mayor = numero2
        //return console.log("el numero mayor es" + numero1)
    }else {
        mayor = numero3
        
        //return console.log("el numero mayor es" + numero1)
    }
     console.log("El numero mayor es " + mayor)
    
}


console.log(determinar_mayor)
**/

