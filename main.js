const form = document.getElementById('form-adicionar');
const nomes = [];
const ddd = [];
const telefones = [];

let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionalinha();
    atualizaTabela();
});

function adicionalinha(){
    const inputNomeContato = document.getElementById('nome-contato');
    const inputDDDContato = document.getElementById('ddd-contato');
    const inputNumeroContato = document.getElementById('numero-contato');
    
        nomes.push(inputNomeContato);

        let linha = '<tr>';
        linha += `<td> ${inputNomeContato.value}</td>`;
        linha += `<td> (${inputDDDContato.value}) ${inputNumeroContato.value}</td>`;
        linha += `</tr>`;
        linhas += linha;

    inputNomeContato.value = '';
    inputDDDContato.value = '';
    inputNumeroContato.value = '';
}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}