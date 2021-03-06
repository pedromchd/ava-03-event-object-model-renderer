const atm = { // DESENVOLVA AQUI O OBJETO ATM
  numeroSerie: 2344499,
  _valor: 0,
  notas5: 0,
  notas10: 0,
  notas20: 0,
  notas50: 0,
  notas100: 0,
  max: 100,
  get valor() {
    const aux = this.notas5 * 5
      + this.notas10 * 10
      + this.notas20 * 20
      + this.notas50 * 50
      + this.notas100 * 100;
    return this._valor = aux;
  },
  abastecerCedulas(qnt, ced) {
    const tmp = this[`notas${ced}`];
    if (tmp === undefined) throw `Não existem cédulas de ${ced} reais`;
    const aux = tmp + qnt;
    this[`notas${ced}`] = (aux > this.max) ? this.max : aux;
  },
  retirarValor(val) {
    if (val > this.valor) return;
    const int = parseInt;
    const ced = Array();
    const notas = [100, 50, 20, 10, 5];
    for (const n of notas) {
      let t = 0; let a = 0;
      const c = this[`notas${n}`];
      if (c) {
        t = int(val / n);
        if (t > c) {
          ced.push(c);
          a = t - c;
        } else ced.push(t);
        val = (val % n) + a * n;
      } else ced.push(0);
    }
    if (val > 0) return;
    notas.forEach((n, i) => {
      this[`notas${n}`] -= ced[i];
    });
  }
};

console.log(atm.numeroSerie) // 2344499
atm.numeroSerie = 34883444
console.log(atm.numeroSerie) // 34883444
// o ATM não tem dinheiro no início
console.log(atm.valor) // 0
// abastecendo com 33 notas de 100
atm.abastecerCedulas(33, 100)
// verificando a quantidade de cédulas de 100
// espera-se 33 cédulas
console.log(atm.notas100) // 33
// espera-se nenhuma cédula de qualquer outro valor
console.log(atm.notas5) // 0
console.log(atm.notas50) // 0
// abastecimento de cédulas não existentes são rejeitados
try {
  atm.abastecerCedulas(8, 3) // 8 cédulas de R$ 3,00
} catch (erro) {
  console.log(erro) // Não existem cédulas de 3 reais
}
// consultando o valor
console.log(atm.valor) // 33 * 100 = 3300 reais
// retirada rejeitada
atm.retirarValor(350) // não há cédulas de R$ 50,00, apenas não efetua, sem erros
console.log(atm.notas100) // 33
console.log(atm.valor) // 3300
// retirada válida
atm.retirarValor(300) // 3 cédulas de 100
console.log(atm.notas100) // 30
console.log(atm.valor) // 3000
// retirada rejeitada
atm.retirarValor(3100) // não há cédulas suficientes
console.log(atm.notas100) // 30
console.log(atm.valor) // 3000
// retirada válida
atm.retirarValor(3000) // vai esvaziar o ATM
console.log(atm.notas100) // 0
console.log(atm.valor) // 0
// abastecimento de R$ 50,00 e R$ 10,00
atm.abastecerCedulas(10, 10) // 10 cédulas de R$ 10,00
atm.abastecerCedulas(10, 50) // 10 cédulas de R$ 50,00
console.log(atm.notas10) // 10
console.log(atm.notas50) // 10
console.log(atm.valor) // 600 = 10 * 10 + 10 * 50
// retirada prioriza cédulas de maior valor
atm.retirarValor(100) // retira 2 cédulas de R$ 50,00
console.log(atm.notas10) // 10
console.log(atm.notas50) // 8
console.log(atm.valor) // 500 = 10 * 10 + 8 * 50
// retirada combinada
atm.retirarValor(90) // 1 cédula de R$ 50,00 e 4 cédulas de R$ 10,00
console.log(atm.notas10) // 6
console.log(atm.notas50) // 7
console.log(atm.valor) //  410 = 6 * 10 + 7 * 50
// incluir casos de teste com retiradas
// quem combinam 3 e 4 cédulas diferentes
// ---------------------------------------------------
// asbastecimento total
atm.abastecerCedulas(100, 5); // 100 cédulas de R$ 5,00
atm.abastecerCedulas(100, 10); // 100 cédulas de R$ 10,00
atm.abastecerCedulas(100, 20); // 100 cédulas de R$ 20,00
atm.abastecerCedulas(100, 50); // 100 cédulas de R$ 50,00
atm.abastecerCedulas(100, 100); // 100 cédulas de R$ 100,00
console.log(atm.notas100, atm.notas50, atm.notas20, atm.notas10, atm.notas5); // 100 100 100 100 100
console.log(atm.valor); // 18500
// retirada válida
atm.retirarValor(4895); // 48 cédulas de R$ 100,00; 1 cédula de R$ 50,00; 2 cédulas de R$ 20,00 e 1 cédula de R$ 5,00
console.log(atm.notas100, atm.notas50, atm.notas20, atm.notas10, atm.notas5); // 52 99 98 100 99
console.log(atm.valor); // 13605
// retirada válida
atm.retirarValor(10985); // 52 cédulas de R$ 100,00; 99 cédulas de R$ 50,00; 41 cédulas de R$ 20,00; 1 cédulas de R$ 10,00 e 1 cédula de R$ 5,00
console.log(atm.notas100, atm.notas50, atm.notas20, atm.notas10, atm.notas5); // 0 0 57 99 98
console.log(atm.valor); // 2620
// retirada válida
atm.retirarValor(2600); // 57 cédulas de R$ 20,00; 99 cédulas de R$ 10,00 e 94 cédulas de R$ 5,00
console.log(atm.notas100, atm.notas50, atm.notas20, atm.notas10, atm.notas5); // 0 0 0 0 4
console.log(atm.valor); // 20
