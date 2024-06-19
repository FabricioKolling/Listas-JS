//5) Uma feira de livros está fazendo promoção onde na compra de 3 livros, o(a) comprador(a) ganha 15% de desconto. Criar um programa que receba os valores dos 3 livros e mostra na tela o total dos livros sem desconto e com desconto.

livro1 = Number(prompt('Digite o valor do primeiro livro: '))
livro2 = Number(prompt('Digite o valor do segundo livro: '))
livro3 = Number(prompt('Digite o valor do terceiro livro: '))

semDesconto = (livro1 + livro2 + livro3)
comDesconto = (semDesconto - (semDesconto*0.15))

alert(`Aqui estão os valores:\n\nSem Desconto: ${semDesconto}\nCom Desconto: ${comDesconto}`)