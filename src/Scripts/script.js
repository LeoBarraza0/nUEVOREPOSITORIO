var numgen = null;
var arreglo = new Array(5);
var indice = 0; 
var listanum = "";
function Validar(event){
    event.preventDefault();
    let num = parseFloat(document.getElementById('num1').value);
    if(num >= 90){if(num>100){document.getElementById('mensaje').innerText = 'Ingrese una nota válida.';}else{document.getElementById('mensaje').innerText = 'Aprobado con honores.';}}
    else if(70 <= num && num< 90){document.getElementById('mensaje').innerText = 'Aprobado.';}
    else if(num < 70){if(num<0){document.getElementById('mensaje').innerText = 'Ingrese una nota válida.';}else{document.getElementById('mensaje').innerText = 'Reprobado.';}}
}

function Determinar(event){
    event.preventDefault();
    let num = parseFloat(document.getElementById('num2').value);
    if(num%2 == 0){document.getElementById('mensaje1').innerText = 'El número es par.';}else{document.getElementById('mensaje1').innerText = 'El número es impar.';}
}

function Calcular(event){
    event.preventDefault();
    let monto = parseFloat(document.getElementById('montocant').value);
    if(monto > 100){monto=monto*0.9;document.getElementById('mensaje3').innerText = 'Su nuevo monto es de: '+monto+'. '+'\n Se ha aplicado un descuento';}
    else{document.getElementById('mensaje3').innerText = 'Su monto es de: '+monto+'. '+'\n No se ha aplicado descuento';}
    
}
function Generar(event){
    event.preventDefault();
    function numeroAleatorioEntre(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    numgen = parseFloat(numeroAleatorioEntre(1, 10));
    document.getElementById("confirmacion").innerText = "¡Se ha generado el número con éxito!";
}
function Adivinar(event){
    event.preventDefault();
    let adivinado = parseFloat(document.getElementById('adivinado').value);
    if(adivinado == numgen){document.getElementById("mensaje4").innerText = "¡Felicidades, adivinaste el número!"}else{document.getElementById("mensaje4").innerText = "Lo siento, el número era: "+numgen;}
}
function Agregar(event) {
    event.preventDefault();
    var numero = parseInt(document.getElementById('num51').value);
    
    if (indice < arreglo.length) {
        arreglo[indice] = numero;
        indice++;
    } else {
        document.getElementById('mensajealerta').innerText = '¡El arreglo está lleno!';
    }
}
function Mostrar(event) {
    event.preventDefault();
    let listanum = "";

    for (let i = 0; i < arreglo.length; i++) {
        listanum += arreglo[i] + " ";
    }
    document.getElementById('mensaje5').innerText = listanum.trim();
}
