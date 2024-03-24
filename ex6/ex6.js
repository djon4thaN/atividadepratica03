function Primo(numero) {
    if (numero <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return true;
}

function contagemRegressiva() {
    for (let i = 30; i >= 1; i--) {
        if (Primo(i)) {
            document.write(` [${i}] `);
        } else {
            document.write(`${i} `);
        }
    }
}

contagemRegressiva();
