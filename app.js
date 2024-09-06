/*    

console.log (dados[2].descricao);

quando se quer saber os dados de algo espeficico da tabela deve ser usar o [] para chamar o objeto desejado, LEMBRANDO QUE SEMPRE COMEÇA POR 0
apos isso deve ser usado o "." para chamar o item desejado do objeto

no exemplo acima ele busca no arquivos "dados" o objeto 2 e o item descrição, devolvendo a seguinte informação no prompt do console:

- Lendas do heavy metal, com músicas rápidas e agressivas, são considerados uma das bandas mais influentes do gênero.

ao ver o arquivo dados.js entraremos o item acima

*/

// console.log (dados);

// console.log(section);



function pesquisar() {

  // Obtém a seção onde os resultados da pesquisa serão exibidos
  let section = document.getElementById("resultados-pesquisa");

  // Obtém o valor digitado no campo de pesquisa e converte para letras minúsculas
  let campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase();

  
  // Verifica se o campo de pesquisa está vazio
  if (campoPesquisa === "") {
    // Se estiver vazio, exibe uma mensagem informando que nada foi encontrado
    section.innerHTML = '<div class="item-resultado"><h2>Nada foi encontrado. Favor inserir a informação desejada no campo "Qual sua Banda Favorita?" </h2>';
    return; // Interrompe a função
  }

  // Inicializa uma string vazia para armazenar os resultados da pesquisa
  let resultados = "";

  // Itera sobre cada elemento (dado) do array "dados" (não mostrado no código)
  for (let dado of dados) {
    // Converte o título, descrição e tags para letras minúsculas para facilitar a comparação
    titulo = dado.titulo.toLowerCase();
    descricao = dado.descricao.toLowerCase();
    tags = dado.tags.toLowerCase();

    // Verifica se o termo de pesquisa está presente no título, descrição ou tags
    if (titulo.includes(campoPesquisa) ||
      descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {

      // Se o termo foi encontrado, cria uma nova div com os detalhes do resultado
      resultados += `
        <div class="item-resultado">
          <h3>
            <a href="#" target="_blank">${dado.titulo}</a>
          </h3>
          <h2>
            <p class="descricao-meta"> ${dado.descricao} </p>
            <a href=${dado.link} target="_blank">Para saber mais clique aqui</a>
          </h2>
        </div>
      `;
    }
  }

  // Verifica se algum resultado foi encontrado
  if (!resultados) {
    // Se nenhum resultado foi encontrado, exibe uma mensagem informando
    resultados = '<div class="item-resultado"><h2>Não Encontrado</h2>';
  }

  // Atribui o HTML gerado à seção de resultados
  section.innerHTML = resultados;
}

/* 
PARA INSERIR DADOS DE JAVASCRIPT NO HTML, VAMOS USAR O MESMO MÉTODO DO HTML PORÉM VAMOS USAR A SECTION.INNERHTM PARA OBRIGAR A INSERIR ESTE DADOS NO HTML

section.innerHTML = `
<div class="item-resultado">
    <h2>
      Led Zapellin
      <p class="descricao-meta">
        - banda de rock britânica que revolucionou a música nos anos 70 com um som poderoso e inovador. Suas
        músicas, como "Stairway to Heaven" e "Whole Lotta Love", são consideradas hinos do rock e a banda continua
        sendo uma das mais influentes da história.
      </p>
      <a href="https://pt.wikipedia.org/wiki/Led_Zeppelin" target="_blank">Para saber mais clique aqui</a>
    </h2>
  </div>
`

AGORA A BAIXO VAMOS UTILIZAR OS DADOS DO ARQUIVOS DADOS.JS PARA FACILITAR NOSSO CÓDIGO
*/

/* 
Para iserir os dados no html, abaixo vou deixar valido uma boa pratica de trabalho ficando mais organizado

for(let dado of dados){

section.innerHTML += `
<div class="item-resultado">
    <h2>
       <a href="#" target="_blank">${dado.titulo}</a>
      <p class="descricao-meta">
       ${dado.descricao}
      </p>
      <a href=${dado.link} target="_blank">Para saber mais clique aqui</a>
    </h2>
  </div>
`
}
*/



