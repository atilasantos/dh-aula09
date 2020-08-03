function calcular() {
    var operacao = document.getElementById('operacao').value;
    var numero1 = parseFloat(document.getElementById('num1').value);
    var numero2 = parseFloat(document.getElementById('num2').value);

    if (numero1 == '' || numero1 == null) {
        alert("Favor digitar um numero valido para operacao (num1)");
        return false; // Aqui para de executar a funcao
    }

    if (numero2 == '' || numero2 == null) {
        alert("Favor digitar um numero valido para operacao (num2)");
        return false; // Aqui para de executar a funcao
    }
    var resultado = null;

    switch(operacao) {
        case '1':
            resultado = numero1 - numero2;
            break;
        case '2':
            resultado = numero1 + numero2;
            break;
        case '3':
            resultado = numero1 + numero2;
            break;
        case '4':
            resultado = numero1 + numero2;
            break;
        default:
            alert('A opcao selecionada e invalida');
            return false;

    }
    document.getElementById('resultado').value = resultado;
}