function rankeadaCalculadora(vitorias, derrotas) {
    let saldo = vitorias - derrotas;

    if (vitorias < 10) {
        return "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        return "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        return "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        return "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        return "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        return "Lendário";
    } else if (vitorias > 100) {
        return "Imortal";
    }
}

let resultado = rankeadaCalculadora(20, 10);

console.log("O nível do jogador é " + resultado);
