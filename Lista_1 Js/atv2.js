//2) Na sua lista de compras do mercado, constam apenas 3 itens: arroz, batata palha e um suco de garrafa. Porém, você possui apenas uma nota de R$100 para pagar. Faça um programa no qual sejam digitados os valores dos itens e mostre na tela valor que você deve receber (troco).

carteira = 100

arroz = Number(prompt('Digite o valor do arroz:'))
batataPa = Number(prompt('Digite o valor do batata palha:'))
sucoGarrafa = Number(prompt('Digite o valor do suco de garrafa:'))

conta = (carteira - (arroz + batataPa + sucoGarrafa))
troco = alert('Aqui esta seu troco: '+ conta)
