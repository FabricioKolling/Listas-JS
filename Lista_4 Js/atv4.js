//4) Faça um programa que solicite o salário e os anos de serviço de um funcionário. Se ele tiver mais de 5 anos de serviço, dê um bônus de 5% sobre o salário.
let bonus = 0.05
let anosNecessarios = 5

salario = Number(prompt('Digite seu salario:'))
anosServico = Number(prompt('Digite a quantos quantos anos voce trabalha aqui: '))

if( anosServico > anosNecessarios){

    contaBonus = salario * bonus
    alert('Voce ganhou um bonus de '+ contaBonus +'R$ em seu salario!')
}
else{
    alert('Obrigado!')
}