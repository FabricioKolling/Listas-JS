//10) Criar um programa para calcular a densidade demográfica (habitantes por quilômetro quadrado) de uma região. Sendo, densidade igual a população (total de habitantes) dividida pela área (quilômetros quadrados). Mostrar mensagens para densidade alta (maior ou igual a 100), média (entre 25 e 100), baixa (menor que 25).

totalHabitantes = Number(prompt('Digite o total de habitantes: '))
qntKmQuadrados = Number(prompt('Digite a area em quilometros quadrados: '))

densidadeDemografica =  totalHabitantes / qntKmQuadrados 

if(densidadeDemografica >= 100){
    alert('Densidade alta!')
}
else if(densidadeDemografica < 25){
    alert('Densidade baixa!')
}
else{
    alert('Densidade média!')
}