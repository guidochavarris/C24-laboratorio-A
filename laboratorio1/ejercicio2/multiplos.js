/*-	Mostrar los 50 primeros números múltiplos de 7, pero NO múltiplos de 2,3 o 5.*/

function multiple(valor, multiple)
        {
            resto = valor % multiple;
            if(resto==0)
                return true;
            else
                return false;
        }
 
        // Arrays que contendran los valores multiples del 3 y del 5
        var multiples_7=[];
        //var multiples_5=[];
        
        // bucle del 1 al 100
        for(var i=1;i<=100;i++)
        {
            if(multiple(i,7))
                multiples_7.push(i);
 
            if(multiple(i,2))
                multiples_7.splice(String(i));
                multiples_7 = multiples_7.filter(function(multiples) {
                return multiples !== String(i); 
            });   

            if(multiple(i,3))
                multiples_7.splice(String(i));
                multiples_7 = multiples_7.filter(function(multiples) {
                return multiples !== String(i); 
            });   

            if(multiple(i,5))
                multiples_7.splice(String(i));
                multiples_7 = multiples_7.filter(function(multiples) {
                return multiples !== String(i); 
            });   
            /*if(multiple(i,2))
            multiples_7.splice(i);    */
             
        }
        document.write("Los multiplos de 7 son: ",multiples_7);
        //document.write("<br>Los multiplos de 5 son: ",multiples_5);
        
        