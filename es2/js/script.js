// Creare un array che contiene 10 oggetti che rappresentano una zucchina, indicandone per ognuno varietà, peso e lunghezza. Calcola quanto pesano tutte le zucchine.

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

var somma = 0;
for (var i = 0; i < zucchine.length; i++) {
  console.log(zucchine[i]);
  somma += zucchine[i].peso
}
console.log('Il peso di tutte le zucchine è: ' + somma + ' grammi');
