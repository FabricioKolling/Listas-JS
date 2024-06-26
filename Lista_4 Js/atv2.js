//2) Crie uma programa que verifique se uma pessoa pode dirigir. Deve ser perguntada a a idade da pessoa e se ela tiver idade suficiente para dirigir (18 anos ou mais), exiba "Você pode dirigir", caso contrário, exiba "Você ainda não pode dirigir".

let maiorDeIdade = 18

idade = Number(prompt('Quantos anos você tem?'))

if (idade > maiorDeIdade){
    alert('Você pode dirigir')
}

else{
    alert('Você ainda nao pode dirigir')
}
