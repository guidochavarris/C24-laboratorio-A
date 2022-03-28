/*alcular la comisión sobre las ventas totales de un empleado, sabiendo que el empleado 
no recibe comisión si su venta es hasta S/.150, si la venta es superior a S/.150 y menor 
o igual a S/.400 el empleado recibe una comisión del 10% de las ventas y si las ventas 
son mayores a 400, entonces la comisión es de S/.50 más el 9% de las ventas.*/

const calcularComision = (cantDinero) => {
    
    if (cantDinero > 150 && cantDinero <= 400) {
        comision =  0.10;
        //cuando se ejecuta un return, este me termina la ejecución de la función
        // return cantPersonas * costo;
        return cantDinero * comision;
    } else if (cantDinero > 400) {
        comision = 0.09;
        // return cantPersonas * costo;
        return cantDinero * comision + 50;
    } else {
        comision = 0

        return "ups no llego a la cantidad suficiente de ventas :("
    }
    //  else {
    //     return cantPersonas * costo;
    // }
    
};
//parseInt()
//parseFloat()
let precioVenta = +prompt("Ingrese la cantidad de Dinero");

// console.log(typeof asistentes);
console.log("El total a ganar por la venta es :")
console.log(calcularComision(precioVenta));