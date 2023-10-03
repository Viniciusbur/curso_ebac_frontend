const form = document.getElementById('form-validacao');

function validaValores(a, b){
if(a>b){
    return true;
}else{
    return false;
}}

form.addEventListener('submit', function(e){
    e.preventDefault();
    
    const valorA = document.getElementById('numero-A');
    const valorB = document.getElementById('numero-B');

    const mensagemSucesso = `O valor de A <b>${valorA}</b> é maior que valor de B <b>${valorB}</b>`;

    if (validaValores(valorA,valorB)){
        document.querySelector('.sucess-message').innerHTML = mensagemSucesso;
    }else{
        alert("O valor A é inferior ao valor B");
    }

})

console.log(form);