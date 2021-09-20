const notas1 = [
  { nome: "andre", nota: 4 },
  { nome: "mariana", nota: 5 },
  { nome: "carlos", nota: 8.5 },
  { nome: "paulo", nota: 9 },
]

const notas2 = [
  { nome: "jonas", nota: 3 },
  { nome: "juliana", nota: 6.7 },
  { nome: "guilherme", nota: 7 },
  { nome: "lucia", nota: 9.3 },
  { nome: "ana", nota: 10 },
]

const rank = junta(notas2, notas1)

console.log(rank)

function junta(notas1, notas2) {

  let atual = 0
  let atual1 = 0
  let atual2 = 0
  let rank = []

  while(atual1 < notas1.length && atual2 < notas2.length) {

    if (notas1[atual1].nota < notas2[atual2].nota) {
      rank[atual] = notas1[atual1]
      atual1++
    } else {
      rank[atual] = notas2[atual2]
      atual2++
    }

    atual++
  }

  while(atual1 < notas1.length) {
    rank[atual] = notas1[atual1]
    atual1++
    atual++
  }

  while(atual2 < notas2.length) {
    rank[atual] = notas2[atual2]
    atual2++
    atual++
  }

  return rank
}
