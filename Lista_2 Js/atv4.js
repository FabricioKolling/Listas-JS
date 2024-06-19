//4) Uma cidade pretende apurar os votos de sua eleição. Faça um programa para ler o número total de eleitores. Em seguida o número de votos do candidato X, o número de votos do candidato Y, total de votos brancos e total de votos nulos (a soma desses quatro, deve ser igual ao total de eleitores). Calcular e escrever o percentual que cada um representa em relação ao total de eleitores. 

candidatoX = Number(prompt('Digite quantos votos tiveram o candidato X: '))
candidatoY = Number(prompt('Digite quantos votos tiveram o candidato Y: '))
votosBranco = Number(prompt('Digite quantos votos fora Brancos: '))
votosNulos = Number(prompt('Digite quantos votos fora Nulos: '))

TotalVotos = (candidatoX + candidatoY + votosBranco + votosNulos)
alert(TotalVotos)

porcentualX = Math.round((candidatoX / TotalVotos)*100)
porcentualY = Math.round((candidatoY / TotalVotos)*100)
porcentualBranco = Math.round((votosBranco / TotalVotos)*100)
porcentualNulo = Math.round((votosNulos / TotalVotos)*100)

alert(`Aqui esta as info:\n\nX: ${porcentualX}%\nY: ${porcentualY}%\nBranco: ${porcentualBranco}%\nNulo: ${porcentualNulo}%`)
