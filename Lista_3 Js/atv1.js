//1) Desenvolva um programa que pergunte ao usuário o salário bruto e calcule o salário líquido, considerando um desconto de 20% para impostos.

let desconto = 0.2

salarioBruto = Number(prompt('Digite seu salario bruto: '))
imposto = salarioBruto - (salarioBruto * desconto)

alert('Aqui esta seu salario liquido: ' +imposto)