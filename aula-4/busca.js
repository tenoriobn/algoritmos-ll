// O foco aqui é receber um valor, varrer a lista, pegar parte da lista que contém o valor recebido
// descartar o restante e encontrar o valor recebido.

// Aqui estamos carregando a lista
const listaLivros = require("./arrayOrdenado");

// Criamos uma função que vai receber no parâmetro a lista,  o `de` que pode ser considerado a partir do
// primeiro elemento, o `até` que é o elemento que termina a lista e `valorBuscado` que é o valor que
// queremos encontrar na lista
function busca(array, de, ate, valorBuscado) {
    // Aqui utilizamos o `Math.floor` para arredondar o resultado do calculo para obter o valor do meio da lista
    const meio = Math.floor((de + ate) / 2);

    // Obtendo o valor do meio, esse valor representará o indice, então `meio` guarda o indice em que
    // é utilizado para acessar o elemento dentro do array.
    const atual = array[meio];

    // Essa condição vai evitar erros, caso a função receber um `valorBuscado` que não está na lista
    // assim, quando `de` ficar maior que `ate` a busca para.
    if (de > ate) {
        return -1;
    }

    // Tendo recebido o `valorBuscado` por parâmetro e acessando o preço do elemento que está no meio
    // é feito uma condição que, se de cara, for o valor desejado,é retornado o indice desse elemento.
    if (valorBuscado === atual.preco) {
        return meio;
    }

    // Se o `valorBuscado` for menor que o preço do elemento atual, será descartado o restante dos elementos
    // e o foco será nos primeiros elementos, realizando uma busca e retornando a posição do valor buscado.
    if (valorBuscado < atual.preco) {
        return busca(array, de, meio - 1, valorBuscado);
    }

    // A última hipótese é a de o `valorBuscado` ser maior que o preço do elemento atual, então é descartado
    // os elementos antes do meio da lista e será buscado no restante dos elementos, retornando a posição
    // do valorBuscado quando esse for encontrado
    if (valorBuscado > atual.preco) {
        return busca(array, meio + 1, ate, valorBuscado);
    }
}

// Aqui estamos passando a lista, a posição em que o primeiro elemento da lista começa, a posição do último
// elemento da lista e o valor que queremos buscar.
console.log(busca(listaLivros, 0, listaLivros.length - 1, 60));