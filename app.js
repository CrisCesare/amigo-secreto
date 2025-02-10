const nomeDigitado = document.querySelector('input');
let selecionado = document.querySelector('h3');
let listaNomes =[];

//Função para não permitir caracter especial

function checkChar(e) {
    const char = String.fromCharCode(e.keyCode || e.which);
    const regex = /^[a-zA-Z\u00C0-\u00FF\s]*$/;
    return regex.test(char);
}

nomeDigitado.addEventListener('keypress', function(e) {
    if(!checkChar(e)) {
        e.preventDefault();
    }
});

//Função para montar a lista de Amigos

function adicionarAmigo() {
    var nomes = nomeDigitado.value.trim();
    var exibirNomes = document.getElementById('listaAmigos');
    document.getElementById('break').removeAttribute('disabled');

    //Padronizar o nome

    nomes = nomes.toLowerCase().split(' ').map(function(palavra) {
        return palavra.charAt(0).toUpperCase() + palavra.slice(1);
    }).join(' ');
   
    if (nomes == '') {
        alert('O Campo está vazio. Por favor, digite um nome válido');        
    } else {
        if (nomes.length < 3) {
            alert('O nome deve ter pelo menos três letras');
        } else {
            if (listaNomes.includes(nomes)) {
                alert('Este nome já está na lista. Por favor, digite um nome diferente');
                nomeDigitado.value = '';
            } else {
                selecionado.innerHTML = '';
                document.getElementById('resultado').innerHTML = '';
                listaNomes.push(nomes);
                exibirNomes.innerHTML += `${nomes}<p></p>`;
                nomeDigitado.value = '';
            }
        }
    }
 }

 // função para sortear o amigo

function sortearAmigo(){
    if (nomeDigitado.value.trim() !== '') {
        alert('O campo de Adicionar Amigo foi iniciado. Favor verificar se há mais amigos para inserir e tente novamente');        
    } else {
        if (listaNomes.length == 0) {
            selecionado.innerHTML = 'Não há amigos para sortear. Favor digite o nome dos seus amigos';  
        } else {
            if (listaNomes.length < 2) {
                selecionado.innerHTML = 'É necessário 2 amigos para iniciar o sorteio. Favor inserir novos amigos';
            } else {
                let valorAmigo = Math.floor(Math.random() * listaNomes.length);
                let amigoSecreto = listaNomes[valorAmigo];
                selecionado.innerHTML = 'O nome sorteado foi:';
                document.getElementById('resultado').innerHTML = amigoSecreto;
                document.getElementById('break').setAttribute('disabled', true);
            }
        }
    }
}

// função limpar lista

function limparLista() {
    listaNomes = [];
    nomeDigitado.value = '';
    selecionado.innerHTML = '';
    document.getElementById('resultado').innerHTML = '';
    document.getElementById('listaAmigos').innerHTML = '';
    document.getElementById('break').removeAttribute('disabled');
}

let mensagemReadMe = 'Olá, se você chegou aqui é porque tem algum conhecimento em programação. \n'+
                    'Deixo abaixo as premissas utilizadas nessa aplicação: \n \n'+
                    'Premissas: \n \n'+
                    '1. Botão "Adicionar" apresenta alerta caso o campo "Digite um nome" esteja em branco; \n'+
                    '2. O nome digitado precisa ter pelo menos 3 letras; \n'+
                    '3. Não é aceito número e caracteres especiais. Mas atenção: Você pode digitar as acentuações de nomes como "Antônio", "Hélio" e "Cecília"; \n'+
                    '4. Não permite entrada de nomes repetidos. Caso necessário, digite o sobrenome de seu amigo; \n'+
                    '5. Você pode digitar os nomes em caixa alta ou caixa baixa, a aplicação irá padronizar para somente a primeira letra maiúscula; \n'+
                    '6. Se houver espaços no início ou fim do nome, a aplicação os remove deixando apenas os caracteres utilizáveis; \n'+
                    '7. A lista é apresentada na tela para que você possa acompanhar todos os nomes já inclusos; \n'+
                    '8. Não permite sortear caso tenha algum texto em "Digite um nome". Termine a inclusão do nome antes de prosseguir; \n'+
                    '9. Se a listagem estiver vazia, apresentará a mensagem de que não há amigos para sortear; \n'+
                    '10. É necessário pelo menos 2 amigos para ocorrer o sorteio. Caso não haja, irá solicitar para que preencha a lista com mais amigos; \n'+
                    '11. Após o sorteio, o botão "Sortear amigo" é desabilitado para não correr o risco de sortear erroneamente outro nome. \n'+
                    '    Caso queira reabilitar o botão, insira mais um amigo e o botão será reativado; \n'+
                    '12. Ao inserir mais nomes na listagem, o nome do antigo amigo sorteado é removido para não ocasionar dúvidas neste novo sorteio; \n'+
                    '13. O botão "Limpar lista" recomeça todo o processo da aplicação.'

console.log(mensagemReadMe);