// Creare  un array che contiene 10 oggetti che rappresentano una zucchina.
// Dividi in due array separati le zucchine che misurano meno o più di 15cm. Infine stampa separatamente quanto pesano i due gruppi di zucchine.

var zucchine = [
  {
    varieta : 'Zucchino nero di Milano',
    peso : 150,
    lunghezza: 18
  },
  {
    varieta :'Zucchino romanesco',
    peso : 100,
    lunghezza: 12
  },
  {
    varieta : 'Zucchino ortolano di Faenza',
    peso : 180,
    lunghezza: 14
  },
  {
    varieta : 'Zucchina lunga fiorentina',
    peso : 120,
    lunghezza: 20
  },
  {
    varieta : 'Zucchino siciliano',
    peso : 150,
    lunghezza: 26
  },
  {
    varieta : 'Zucchina striata di Napoli',
    peso : 140,
    lunghezza: 16
  },
  {
    varieta : 'Zucchina bianca triestina',
    peso : 130,
    lunghezza: 13
  },
  {
    varieta : 'Zucchina rigata pugliese',
    peso : 150,
    lunghezza: 19
  },
  {
    varieta : 'Zucchino tondo di Piacenza',
    peso : 200,
    lunghezza: 8
  },
  {
    varieta : 'Zucchino giallo',
    peso : 160,
    lunghezza: 15
  },
];

var zucchineCorte = [];
var zucchineLunghe = [];

for (var i = 0; i < zucchine.length; i++) {
  if (zucchine[i].lunghezza < 15) {
    zucchineCorte.push(zucchine[i])
  } else if (zucchine[i].lunghezza >= 15) {
    zucchineLunghe.push(zucchine[i])
  }
}

var sommaCorte = 0;
var sommaLunghe = 0;

for (var i = 0; i < zucchineCorte.length; i++) {
  console.log(zucchineCorte[i]);
  sommaCorte += zucchineCorte[i].peso
}
console.log('Il peso delle zucchine corte è: ' + sommaCorte + ' grammi');

for (var i = 0; i < zucchineLunghe.length; i++) {
  console.log(zucchineLunghe[i]);
  sommaLunghe += zucchineLunghe[i].peso
}
console.log('Il peso delle zucchine lunghe è: ' + sommaLunghe + ' grammi');
