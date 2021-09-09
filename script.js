function checkOut(){
    //comprobación
    //console.log("ok_checkout");
    
    //Declaración de variables mediante "prompt"
    let nombre = prompt("Ingresa tu nombre");
    let edad = parseInt (prompt("Excelente " + nombre + ", Bienvenido/a!. Ahora ingresa tu edad"));
    
    //Estructura Condicional
    if(edad < 18){
        alert("Lo sentimos, " + nombre + ". Pero eres menor de edad.");
       
    }
    else if  (edad < 40) {
        alert("Ya sólo falta un paso, " + nombre + ". Finaliza el pago y podrás acceder al curso.");
    }
    else if (edad > 39){
        alert("Felicitaciones " + nombre + ". Puedes obtener un descuento con el codigo: Coder.20");
        document.getElementById("btnPromo").classList.remove("btn_promo");
    }

}
function promo(){
    //comprobación
    //console.log("ok_promo");
    
    //Declaración de variables mediante "prompt"
    let datoIngresado = prompt("Ingresá tu código de descuento");
    
    //Estructura Condicional 
    if (datoIngresado == "Coder.20") {
        alert("Felicitaciones! Ahora puedes acceder al Curso por solo $800");
    }
    else{
        alert("Lo siento, el codigo ingresado no es valido. Intenta nuevamente...");
    }
}