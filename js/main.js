const formulario = document.querySelector('#formSubmit')
const tabela = document
  .querySelector('#tabela')
  .getElementsByTagName('tbody')[0]

let produtos = []

formulario.addEventListener('submit', (evento) => {
  evento.preventDefault()
  const nomeDoProduto = document.querySelector('#NomeDoProduto').value
  const valorDoProduto = parseFloat(
    document.querySelector('#ValorDoProduto').value
  ).toFixed(2)

  produtos.push({
    name: nomeDoProduto,
    valor: valorDoProduto,
  })

mostraTabela()
  formulario.reset()
})

function mostraTabela() {
  produtos.sort((a, b) => a.valor - b.valor)

  while (tabela.rows.length > 0) {
    tabela.deleteRow(0)
  }

  produtos.forEach((produto) => {
    const novaLinha = tabela.insertRow()
    const celula0 = novaLinha.insertCell(0)
    const celula1 = novaLinha.insertCell(1)

    celula0.textContent = produto.name
    celula1.textContent = `R$ ${produto.valor}`
  })
}
