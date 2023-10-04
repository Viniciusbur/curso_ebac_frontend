const form = document.getElementById('form-validacao');

function validaValores(a, b){
    return Number(b) > Number(a);
}

form.addEventListener('submit', function(e){
    e.preventDefault();
    const limpaTela = document.querySelector('.sucess-message').innerHTML = '';
    
    const valorA = parseFloat(document.getElementById('numero-A').value);
    const valorB = parseFloat(document.getElementById('numero-B').value);

    const mensagemSucesso = `O valor de B <b>(${valorB})</b> é maior que valor de A <b>(${valorA})</b>`;

    if (validaValores(valorA,valorB)){
        document.querySelector('.sucess-message').innerHTML = mensagemSucesso;
    }else{
        alert("O valor B é inferior ao valor A, favor informe outro valor");
    }

    document.getElementById('numero-A').value = null;
    document.getElementById('numero-B').value = null;
});