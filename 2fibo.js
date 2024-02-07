function fibo(z) {
    let x = 0;
    let y = 1;

    while (y <= z) {
        if (y === z) {
            return true;
        }
        let next = x + y;
        x = y;
        y = next;
    }

    return false;
}

// Teste
const Teste = 46;
if (fibo(Teste)) {
    console.log(Teste + " pertence à sequência de Fibonacci.");
} else {
    console.log(Teste + " não pertence à sequência de Fibonacci.");
}

