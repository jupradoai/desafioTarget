
const faturamentoPorEstado = {
    "SP": 67836.43,
    "RJ": 36678.66,
    "MG": 29229.88,
    "ES": 27165.48,
    "Outros": 19849.53
};


function calcularFaturamentoTotal(faturamentoPorEstado) {
    let total = 0;
    for (let estado in faturamentoPorEstado) {
        total += faturamentoPorEstado[estado];
    }
    return total;
}


function calcularPercentualRepresentacao(faturamentoPorEstado, total) {
    const percentuais = {};
    for (let estado in faturamentoPorEstado) {
        percentuais[estado] = (faturamentoPorEstado[estado] / total) * 100;
    }
    return percentuais;
}


const totalFaturamento = calcularFaturamentoTotal(faturamentoPorEstado);


const percentuaisRepresentacao = calcularPercentualRepresentacao(faturamentoPorEstado, totalFaturamento);


console.log("Estado\t\tPercentual de Representação");
console.log("-------------------------------------");
for (let estado in percentuaisRepresentacao) {
    console.log(`${estado}:\t\t${percentuaisRepresentacao[estado].toFixed(2)}%`);
}