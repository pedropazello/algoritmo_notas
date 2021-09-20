const notas = [
  { nome: "carlos", nota: 8.5 },
  { nome: "Andre", nota: 4 },
  { nome: "paulo", nota: 9 },
  { nome: "mariana", nota: 5 },
  { nome: "juliana", nota: 6.7 },
  { nome: "jonas", nota: 3 },
  { nome: "lucia", nota: 9.3 },
  { nome: "guilherme", nota: 7 },
  { nome: "ana", nota: 10 },
]

// intercala(notas, 1, 4, notas.length - 3)

ordena(notas, 0, notas.length - 1)
console.log(notas)

function ordena(notas, inicial, termino) {
  let quantidade = termino - inicial

  if (quantidade > 1) {
    let meio = (inicial + termino) / 2

    ordena(notas, inicial, meio)
    ordena(notas, meio, termino)
    intercala(notas, inicial, meio, termino)
  }

  // intercala(notas, 0, 1, 2)
  // intercala(notas, 2, 3, 4)
  // intercala(notas, 0, 2, 4)

  // intercala(notas, 4, 5, 6)
  // intercala(notas, 6, 7, 8)
  // intercala(notas, 4, 6, 8)

  // intercala(notas, 0, 4, 8)
  // intercala(notas, 0, 4, 9)
}

function intercala(notas, inicio, miolo, termino) {
  let resultado = []
  let atual = 0
  let atual1 = inicio
  let atual2 = miolo

  while (atual1 < miolo && atual2 < termino) {
    if (notas[atual1].nota < notas[atual2].nota) {
      resultado[atual] = notas[atual1]
      atual1++
    } else {
      resultado[atual] = notas[atual2]
      atual2++
    }

    atual++
  }

  while(atual1 < miolo) {
    resultado[atual] = notas[atual1]
    atual1++
    atual++
  }

  while(atual2 < termino) {
    resultado[atual] = notas[atual2]
    atual2++
    atual++
  }

  for (let contador = 0; contador < atual; contador++) {
    notas[inicio + contador] = resultado[contador];
  }
}
