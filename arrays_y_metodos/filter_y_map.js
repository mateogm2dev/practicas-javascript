const jugadores = [
  { nombre: "Messi",    goles: 8,  pais: "Argentina" },
  { nombre: "Mbappé",   goles: 5,  pais: "Francia"   },
  { nombre: "Haaland",  goles: 12, pais: "Noruega"   },
  { nombre: "Benzema",  goles: 0,  pais: "Francia"   },
  { nombre: "Lewandowski", goles: 3, pais: "Polonia" },
  { nombre: "Kane",     goles: 2,  pais: "Inglaterra"},
  { nombre: "Neymar",   goles: 1,  pais: "Brasil"    },
  { nombre: "Müller",   goles: 0,  pais: "Alemania"  },
];


//parte a

const goleadores = jugadores.filter( j => j.goles > 2);

console.log(goleadores);

// parte b

const nombres = jugadores.map(j => j.nombre);

console.log(nombres)

//parte c

const goleadores = jugadores.filter  (j => j.goles > 2);
  
const ordenados = goleadores.map (j => j.nombre);

console.log(ordenados);

//parte d

const frances = jugadores.find(j => j.pais === "Francia");

console.log(frances);



