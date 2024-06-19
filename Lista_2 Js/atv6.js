//6) Em uma fábrica de reciclagem de materiais, cada 10kg de plástico rendem R$2,00 cada 30kg de papel rendem R$3,00 e cada 50kg de metal rendem R$5,00. Perguntar ao usuário a quantidade (kg) de cada material que deseja entregar na fábrica e mostrar o total que receberá em reais. 

let kgPlastico = 0.2
let kgPapel = 0.1
let kgMetal = 0.1

plastico = Number(prompt('Digite a quantidade (kg) de plastico que deseja entregar na fabrica: '))
papel = Number(prompt('Digite a quantidade (kg) de papel que deseja entregar na fabrica: '))
metal = Number(prompt('Digite a quantidade (kg) de metal que deseja entregar na fabrica: '))

precoPlastico = (plastico * kgPlastico)
precoPapel = (papel * kgPapel)
precoMetal = (metal * kgMetal)

alert(`Aqui está o total: ${precoMetal+precoPapel+precoPlastico}`)