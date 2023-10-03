const form = document.getElementById('form-validacao');

function validaValores(a, b){
if(b>a){
    return true;
}else{
    return false;
}}

form.addEventListener('submit', function(e){
    e.preventDefault();
    const limpaTela = document.querySelector('.sucess-message').innerHTML = '';
    
    const valorA = document.getElementById('numero-A');
    const valorB = document.getElementById('numero-B');

    const mensagemSucesso = `O valor de B <b>(${valorB.value})</b> é maior que valor de A <b>(${valorA.value})</b>`;

    if (validaValores(valorA.value,valorB.value)){
        document.querySelector('.sucess-message').innerHTML = mensagemSucesso;
    }else{
        alert("O valor B é inferior ao valor A, favor informe outro valor");
    }
    valorA.value = null;
    valorB.value = null;
});