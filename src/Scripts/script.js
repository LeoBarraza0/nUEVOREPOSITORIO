function Validar(event){
    event.preventDefault;
    var num = parseFloat(document.getElementById('num1').value);
    document.getElementById('mensaje').innerText = num;
}