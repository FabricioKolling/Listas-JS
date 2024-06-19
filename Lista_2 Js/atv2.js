//2) Desenvolva uma programação que peça ao usuário para digitar o ano do seu nascimento no formato (YYYY) e o ano atual também no formato (YYYY). Em seguida mostre na tela qual a idade do usuário em anos, em meses, em dias e em semanas. 

var totalDias = 365
var totalSemanas = 52
var totalMeses = 12

anoNasc = Number(prompt('Digite o ano do seu nascimento (YYYY): '))
anoAtual = Number(prompt('Digite que ano estamos (YYYY): '))

resultado = (anoAtual - anoNasc)
resultadoDias = (resultado * totalDias)
resultadoSemanas = (resultado * totalSemanas)
resultadoMeses = (resultado * totalMeses)

alert(`Você tem: ${resultado} anos, ${resultadoMeses} meses, ${resultadoSemanas} semanas, ${resultadoDias} dias.`)