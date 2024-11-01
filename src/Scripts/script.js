function Validar(event){
    event.preventDefault();
    let num = parseFloat(document.getElementById('num1').value);
    if(num >= 90){document.getElementById('mensaje').innerText = 'Aprobado con honores.';}
    else if(70 <= num && num< 90){document.getElementById('mensaje').innerText = 'Aprobado.';}
    else if(num < 70){document.getElementById('mensaje').innerText = 'Reprobado.';}
}

function Determinar(event){
    event.preventDefault();
    let num = parseFloat(document.getElementById('num2').value);
    if(num%2 == 0){document.getElementById('mensaje1').innerText = 'El número es par.';}else{document.getElementById('mensaje1').innerText = 'El número es impar.';}
}

function Calcular(event){
    event.preventDefault();
    let monto = parseFloat(document.getElementById('montocant').value);
    if(monto > 100){monto=monto*1.1;document.getElementById('mensaje3').innerText = 'Su nuevo monto es de: '+monto+'. '+'\n Se ha aplicado un descuento';}
    else{document.getElementById('mensaje3').innerText = 'Su monto es de: '+monto+'. '+'\n No se ha aplicado descuento';}
    
}