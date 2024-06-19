//5) Os leões baios são animais territoriais. Seu território compreende cerca de 320km² por indivíduo, exceto quando formam casais, nesse caso o casal costuma dominar uma área de 400km², juntos. Considerando que existam 9 fêmeas e 5 machos em determinada reserva ambiental. Elaborar um programa no qual você deve digitar quantos casais (dados de pesquisa de campo) existem dentre esse total e mostrar na tela a soma geral de área dominada, incluindo todos indivíduos.

let territorioSolo = 320
let territorioCasal = 400
let totalLeoes = 14

totalCasais = Number(prompt('Quantos casais existem: (max 5)'))

areaDominadaCasal = totalCasais * territorioCasal
areaDominadaSolo = (14 - (totalCasais * 2)) * 320
areaGeral = areaDominadaCasal + areaDominadaSolo

alert(`A àrea total dominada é ${areaGeral}km²` )