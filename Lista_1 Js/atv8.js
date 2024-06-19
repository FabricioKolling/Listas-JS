//8) Uma pousada cobra R$280 reais a diária por quarto e R$15 reais o café por pessoa por dia. Você pretende passar um tempo com alguns amigos nessa pousada, sendo que todos ficarão no mesmo quarto. Informar a quantidade de pessoas, o número de diárias e quantas pessoas do grupo vão querer café diário. Mostrar na tela o total a pagar.

pessoas = Number(prompt('Digite a quantidade de pessoas: '))
numDiarias = Number(prompt('Quantos dias pretendem ficar hospedados: '))
qntCafe = Number(prompt('Quantos vao querer café da manha: '))

diaria = (numDiarias * 280)
cafe = ((qntCafe * 15)*numDiarias)

alert(`Aqui está sua conta: \n\nDiaria = ${diaria}\nCafe = ${cafe}\n\nTotal: ${diaria + cafe}`)
