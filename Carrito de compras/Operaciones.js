'use strict'
alert('Cargado con exito');

//Función para calcular el total y desplegarlo en la tabla 
function calcular(){
    const pre = 15;
    var total = 0;
    var cant1 = document.getElementById("cant1").value; 
    var mt = document.getElementById("tot1");

    if (cant1>=1) {
        total = (cant1 * pre);
        console.log(total);
        mt.innerHTML= "$ "+total;

    } else {
        alert('Error al calcular el total, pruebe ingresando una cantidad válida. \n Evite ingresar letras o cantidades negativas');
    }
}

//Función de comprar para dejar en 0 el total
function comprar(){
    var cant1=document.getElementById("cant1").value; 
    alert('Datos de compra\n Producto: Sabritas crema y especias \n Cantidad: '+cant1+'\n Gracias por tu compra se te enviará una notificación a tu correo');
    var mt= document.getElementById("tot1");
    mt.innerHTML= "$ 0";
}