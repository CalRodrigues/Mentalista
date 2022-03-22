let numeroSecreto = parseInt(Math.random() * 11)
let tentativas = 3

function chutar() {
  const chute = parseInt(document.getElementById('valor').value)
  const exibirResultado = document.getElementById('resultado')

  if (chute > 10 || chute < 0) {
    exibirResultado.innerHTML = `Digite um número de 0 a 10...`
  } else if (chute == numeroSecreto) {
    exibirResultado.innerHTML = `Yuuup!!! Você acertou!!!`
  } else if (chute > numeroSecreto) {
    tentativas--
    exibirResultado.innerHTML = `O número é um pouco menor... <br> Você ainda tem ${tentativas} tentativas!`
  } else if (chute < numeroSecreto) {
    tentativas--
    exibirResultado.innerHTML = `O número é um pouco maior... <br> Você ainda tem ${tentativas} tentativa!`
  }

  if (tentativas == 0) {
    exibirResultado.innerHTML = `Ops, suas tentativas acabaram! O número era ${numeroSecreto} <br> Tente novamente!`
  }
}

function zerar() {
  numeroSecreto = parseInt(Math.random() * 11)
  tentativas = 3
  resultado.innerHTML = ' '
  valor.value = ' '
}
