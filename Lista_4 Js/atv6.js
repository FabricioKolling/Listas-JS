//6) Faça um programa para ler o salário anual de um funcionário e o piso salarial mensal da sua categoria. Mostrar o salário mensal do funcionário e dizer se ele recebe de acordo com o piso (maior ou igual o piso da categoria) ou se recebe abaixo do piso. (DESAFIO: Incluir uma terceira condição para caso receba exatamente igual ao piso)

let mesesAno = 12

salarioAnual = Number(prompt('Digite seu salário anual:'))
pisoSalarialMensal = Number(prompt('Digite seu piso salarial mensal da sua categoria:'))

salarioMensal = (salarioAnual / mesesAno)

if(salarioMensal >= pisoSalarialMensal){
    alert('Você ganha ' + salarioMensal + ' por mês e recebe de acordo ao seu piso!')
}
else{
    alert('Você ganha ' + salarioMensal + ' por mês e recebe abaixo do seu piso!')
}