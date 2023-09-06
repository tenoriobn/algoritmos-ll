const listaLivros = require('./array');

// Aqui criei uma função para receber a array e executar algo
function mergeSort(array, nivelAninhamento = 0) {
    // O `nivelAninhamento` tem apenas a finalidade de mostrar o passo a passo da recursividade feita no algoritmo
    console.log(`nível de Aninhamento: ${nivelAninhamento}`);
    console.log(array);

    // No caso, vamos executar uma condição que se `array` conter 1 elemento ou menos para a condição
    if (array.length > 1) {
        // Aqui garantimos que o resultado da divisão de elementos do array seja inteiro.
        // sendo assim, se houver 10 elementos, a const irá armazenar 5.
        const meio = Math.floor(array.length / 2);
        // Aqui utilizamos o método `slice` para pegar do indice 0 até o número armazenado em `meio`, ex: 5.
        // sendo assim, o `mergeSort` de modo recursivo vai dividindo os elementos dentro da const
        // até que sobre um único elemento
        const parte1 = mergeSort(array.slice(0, meio), nivelAninhamento++);
        // Aqui é igual a cima, entretanto, inicia do indice 5 armazenado no `meio` e pega o restante de elementos
        // além disso, sera divido os elementos da `parte2` até só sobrar 1 elemento e a condição ser false.
        const parte2 = mergeSort(array.slice(meio, array.length), nivelAninhamento++);

        // Aqui chamamos a função ordena, responsável por ir comparando a `parte1` com a `parte2`
        // indice por indice, até ordenar a lista geral que por fim é armazenado na `array`
        // tornando assim, uma lista ordenada.
        array = ordena(parte1, parte2)
    }

    // por fim, é feito o retorno com a lista ordenada para a variável `array`
    return array;
}

// Aqui, basicamente, essa função faz a mesma coisa que no algoritmo da aula 1
// Ele compara o indice da primeira lista, com o indice da segunda lista, conferindo o elemento
// e ordenando os elementos, indice por indice.
function ordena(parte1, parte2) {
    let posicaoAtualParte1 = 0;
    let posicaoAtualParte2 = 0;

    const resultado = []

    while (posicaoAtualParte1 < parte1.length && posicaoAtualParte2 < parte2.length) {
        let produtoAtualParte1 = parte1[posicaoAtualParte1];
        let produtoAtualParte2 = parte2[posicaoAtualParte2];

        if (produtoAtualParte1.preco < produtoAtualParte2.preco) {
            resultado.push(produtoAtualParte1)
            posicaoAtualParte1++
        } else {
            resultado.push(produtoAtualParte2)
            posicaoAtualParte2++
        }
    }

    return resultado.concat(
        posicaoAtualParte1 < parte1.length 
        ? parte1.slice(posicaoAtualParte1)
        : parte2.slice(posicaoAtualParte2)
    )
}

console.log(mergeSort(listaLivros));