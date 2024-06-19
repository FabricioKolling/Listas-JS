//6) Desenvolver um programa que realize o cálculo de consumo de combustível por quilometragem, para veículos (km por litro). Para isso, devem ser digitados os dados de distância total percorrida (km) e total de combustível gasto (litros), mostrando o resultado ao final.

distancia = Number(prompt('Digite a distancia percorrida em km: '))
combustivelGasto = Number(prompt('Digite o total de combustivel gasto em litros: '))

calculo = (distancia / combustivelGasto)
alert(`O veiculo roda em ${calculo}km um litro de gasolina.`)