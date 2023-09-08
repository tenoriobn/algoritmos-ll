const listaLivros = require('./array');

// Função recebe o `pivo` que é o elemento base que queremos pegar para comparar com outros elementos
// e só pegar os elementos menores que ele, além disso recebe a lista com os elementos.
function encontraMenores(pivo, array) {
    // let que inicia em 0, mas é incrementada conforme for achando elementos menores que o pivo
    let menores = 0;

    // Estrutura de repetição para percorrer a array, executando o código para cada elemento
    for(let atual = 0; atual < array.length; atual++) {
        // Aqui vai acessar o elemento dentro da array com base no indice que contém o número de `atual`
        // assim será pego elemento por elemento conforme a estrutura for varrendo a lista.
        let produtoAtual = array[atual];

        // Aqui, após identificar o elemento, ele é acessado para pegar a propriedade preco
        // em seguida, o `pivo` que é o elemento da lista passado como parâmetro é comparado
        // se o preco do produtoAtual for menor que o preço do pivo é executado o código dentro
        if(produtoAtual.preco < pivo.preco) {
            // esse código acrescenta +1 na variável `menores` contando quantos elementos tem menor que o pivo
            menores++
        }
    }

    // Aqui, é passado a array, em seguida é utilizado o método `indexOf` para representar o parâmetro `de`
    // que é de onde vai partir a troca e `menores` é o número de elementos menores que o pivo
    // fazendo com que ocorra uma troca de `indexOf` para `menores`
    // se indexOf for `2` e menores for `5`, então indexOf vai para 5 e menores vai para 2, ou seja, troca.
    trocaLugar(array, array.indexOf(pivo), menores);

    // aqui é feito o retorno da array ordenada
    return array
}

// Essa função é chamada dentro da função `encontreMenores`, recebe a array, o valor do `pivo` e o valor de `menores`
function trocaLugar(array, de, para) {
    // Aqui `elem1` vai guarda o indice do pivo, exemplo: `2`, enquanto `elem2` guarda a quantidade de elementos
    // com preço menor que o `pivo`, exemplo: `5`. 
    let elem1 = array[de];
    let elem2 = array[para];

    // Logo abaixo é feito a troca, o elemento do indice 2 vai para o 5 e o 5 vai para o 2
    array[para] = elem1;
    array[de] = elem2;
}

// Aqui estamos passando o pivo, elemento que ocupa o indice `2` e a array com os elementos.
console.log(encontraMenores(listaLivros[2], listaLivros));