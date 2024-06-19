//7) Criar um programa que realize o cálculo de uma média ponderada (considerando o peso da nota) da faculdade. A média é composta por três notas: Atividade Individual, Seminário em Equipe, Projeto final. O usuário deve digitar as três notas e os seus respectivos pesos. A média deve ser calculada e mostrada na tela.

nota1 = Number(prompt('Digite a nota da sua atividade individual: '))
peso1 = Number(prompt('Digite o peso da atividade individual: '))

nota2 = Number(prompt('Digite a nota do seu seminario em equipe: '))
peso2 = Number(prompt('Digite o peso do seminario em equipe: '))

nota3 = Number(prompt('Digite a nota do seu projeto final: '))
peso3 = Number(prompt('Digite o peso do projeto final: '))


mediaPonderada = (((peso1 * nota1) + (peso2 * nota2) + (peso3 * nota3)) / (peso1 + peso2 + peso3))

alert('Aqui esta sua média: '+ Math.round(mediaPonderada))