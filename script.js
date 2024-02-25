document.addEventListener('DOMContentLoaded', function(){
    var formulario = document.querySelector('form');
    formulario.addEventListener('submit', function (event){
        event.preventDefault();

        var numeroA = parseFloat(document.getElementById('campoa').value);
        var numeroB = parseFloat(document.getElementById('campob').value);

        if (numeroB > numeroA) {
            document.getElementById('resultado').innerText = 'Número B maior que Número A = VÁLIDO!';
        } else {
            document.getElementById('resultado').innerText = 'Numero B menor que Número A = INVÁLIDO!';
        }
    });
});

