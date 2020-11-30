var arrayBidimensional=[
    ['pessoa', 'outros','coisas'],
    ['jogador', 'animal','força'],
    ['programa', 'preguiça','leite'],
    ['azul', 'celular','golfe']
]

// for(a in arrayBidimensional)
// for(b in arrayBidimensional)
// console.log(arrayBidimensional[a][b]);
// resultado devolveu espalhado os valores mas com undefined no entre as chaves
for(i=0;i<arrayBidimensional.length;i++)
for(j=0;j<arrayBidimensional[i].length;j++)
console.log(arrayBidimensional[i][j]);