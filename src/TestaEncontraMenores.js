const guilherme = { nome: "guilherme", nota: 7 }

const notas = [
  { nome: "carlos", nota: 8.5 },
  { nome: "Andre", nota: 4 },
  { nome: "paulo", nota: 9 },
  { nome: "mariana", nota: 5 },
  { nome: "juliana", nota: 6.7 },
  { nome: "jonas", nota: 3 },
  { nome: "lucia", nota: 9.3 },
  guilherme,
  { nome: "ana", nota: 10 },
]

const notasMenores = encontraMenores(guilherme, notas)

console.log(notasMenores)

function encontraMenores(nota, notas) {
  let notasMenores = 0

  notas.forEach((notaAtual) => {
    if (notaAtual.nota < nota.nota) {
      notasMenores++
    }
  })

  return notasMenores
}
