let alturaPedro = 1.50;
let alturaLucas = 1.10;

const taxaCrescimentoPedro = 0.02;
const taxaCrescimentoLucas = 0.03;

let anos = 0;

while (alturaLucas <= alturaPedro) {
    alturaPedro += taxaCrescimentoPedro;
    alturaLucas += taxaCrescimentoLucas;
     anos++;
}

document.write("a) Serão necessários ", anos, " anos para Lucas e Pedro terem o mesmo tamanho. <br>");

alturaPedro = 1.50;
alturaLucas = 1.10;
anos        = 1;

while (alturaLucas < alturaPedro) {
    alturaPedro += taxaCrescimentoPedro;
    alturaLucas += taxaCrescimentoLucas;
     anos++; 
}

document.write("b) Serão necessários ", anos, " anos para Lucas ser maior que Pedro.");
