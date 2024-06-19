//4) Um(a) programador(a) deseja, ao final do mês, saber quantas horas por semana em média estudou programação. Crie um programa no qual seja digitado a quantidade de horas de cada semana do mês e no final mostre a média de horas por semana naquele mês.

alert('Digite quantas horas você estudou em cada semana:')
semana1 = Number(prompt('Semana 1:'))
semana2 = Number(prompt('Semana 2:'))
semana3 = Number(prompt('Semana 3:'))
semana4 = Number(prompt('Semana 4:'))

 media = ((semana1 + semana2 + semana3 + semana4)/4)
 alert(`A média de horas estudadas por semana neste mês, é de ${media} por semana.`)
