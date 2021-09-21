const notas = [
  { nome: "Andre", nota: 4 },
  { nome: "carlos", nota: 8.5 },
  { nome: "ana", nota: 10 },
  { nome: "jonas", nota: 3 },
  { nome: "juliana", nota: 6.7 },
  { nome: "lucia", nota: 9.3 },
  { nome: "paulo", nota: 9 },
  { nome: "mariana", nota: 5 },
  { nome: "guilherme", nota: 7 }
]

quebraNoPivo(notas, 0, notas.length)

console.log(notas)

function quebraNoPivo(notas, inicial, termino) {
  let menoresEncontrados = 0
  const pivo = notas[termino - 1]

  for(let analisando = 0; analisando < termino - 1; analisando++) {
    const atual = notas[analisando]

    if (atual.nota <= pivo.nota) {
      menoresEncontrados++
    }
  }

  troca(notas, termino - 1, menoresEncontrados)
}

function troca(notas, de, para) {
  let nota1 = notas[de]
  let nota2 = notas[para]

  notas[para] = nota1
  notas[de] = nota2
}
