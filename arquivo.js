/*sistema de contagem e classificação! 
- Classificação de campeonato de futebol
- Classificação por pontos
- contagem de vitórias

Vitória = 3 pontos*/
var campeonato = []

var times =[
    {nome:"corinthians", vitorias:7},
    {nome:"palmeiras", vitorias:5},
    {nome:"santos", vitorias:4},
    {nome:"sao paulo", vitorias:4},
    {nome:"ponte preta", vitorias:6},
    {nome:"guarani", vitorias:0},
    {nome:"gremio", vitorias:3},
    {nome:"chapecoense", vitorias:1},
    {nome:"internacional", vitorias:3}
]
    
for(var contador = 0; contador<times.length;contador ++){
    var pontos = times[contador].vitorias * 3
    campeonato.push(
        {nome: times[contador].nome, vitorias: times[contador].vitorias, pontos: pontos} 
        
    )


}

campeonato.sort(function(a, b) {
    if (a.pontos > b.pontos) {
      return -1;
    }
    if (a.pontos < b.pontos) {
      return 1;
    }
    // a deve ser igual a b
    return 0;
  })
console.table(campeonato)
console.log(`
relatorio
melhor time: ${campeonato[0].nome}
pior time: ${ campeonato[campeonato.length-1].nome}
`)





