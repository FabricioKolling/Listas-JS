//2) Crie um programa que solicite ao usuário um valor em horas e converta para minutos e segundos.

horas = Number(prompt('Digite que horas sao agora: '))

min = horas * 60
segundos = horas * 3600

alert(`Aqui esta: \n\nEm minutos = ${min}\nEm segundos = ${segundos}`)