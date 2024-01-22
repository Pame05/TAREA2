'Use strict'
// tenemos un array con los nombres de una familia
let arr = ["John", "Maria", "Joseph", "Danielle"]

// asignación desestructurante
// fija firstName = arr[0]
// y surname = arr[1]
let [father, mother, son, daughter] = arr;

alert(father); 
alert(mother);  
alert(son); 
alert(daughter);  

// resto

let [name1, name2, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

// `rest` es un array de ítems, comenzando en este caso por el tercero.
alert(rest[0]); // Consul
alert(rest[1]); // of the Roman Republic
alert(rest.length); // 2