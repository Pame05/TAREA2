'Use strict'
let map = new Map();

map.set('1', 'str1');   // un string como clave
map.set(1, 'num1');     // un número como clave
map.set(true, 'bool1'); // un booleano como clave

// ¿recuerda el objeto regular? convertiría las claves a string.
// Map mantiene el tipo de dato en las claves, por lo que estas dos son diferentes:
alert( map.get(1)   ); // 'num1'
alert( map.get('1') ); // 'str1'

alert( map.size ); // 3
alert(map.get(true));

//Objeto como clave

let frutas = {nombre: "Manzana"};
let frutasCountMap = new Map();
frutasCountMap.set(frutas,14);
alert(frutasCountMap.get(frutas));

// Iteracion sobre Map

let listaUtiles = new Map([
    ['esferos', 3],
    ['carpeta', 5],
    ['pinturas', 12]
  ]);
  
  // iterando sobre las claves ([utiles])
  for (let utiles of listaUtiles.keys()) {
    alert(utiles); 
  }
  
  // iterando sobre los valores (precios)
  for (let amount of listaUtiles.values()) {
    alert(amount); 
  }
  
  // iterando sobre las entradas [clave, valor]
  for (let entry of listaUtiles) { // lo mismo que listaUtiles.entries()
    alert(entry); 
  }


///////////////////////////////////////////////////////////////////////////
//SET

  let set = new Set();

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

// visitas, algunos usuarios lo hacen varias veces
set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(mary);

// set solo guarda valores únicos
alert( set.size ); // 3

for (let user of set) {
  alert(user.name); // John (luego Pete y Mary)
}

////////////////////////////////////////////////////////////////////////////////////////////
// SET ITERACION

let set1 = new Set(["oranges", "apples", "bananas"]);

for (let value of set) alert(value);

// lo mismo que forEach:
set.forEach((value, valueAgain, set) => {
  alert(value);
});

