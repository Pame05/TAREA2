'Use strict'


//Symbol.iterator
let range = {
    from: 3,
    to: 7,
  
    // simbol para hacer que el objeto sea interable
    [Symbol.iterator]() {
      this.current = this.from;
      return this;
    },
  
    next() {
      if (this.current <= this.to) {
        return { done: false, value: this.current++ };
      } else {
        return { done: true }; // true el bucle finaliza, false el valor sera value
      }
    }
  };
  
  for (let num of range) {
    alert(num); // 3, luego 4, 5, 6, 7
  }

  // STRING ES ITERABLE

  for (let char of "Monserrath♫"){
  alert(char)
  };

  let str='Hello ¶§■'
  for(let letter of str){
  alert(letter)};


  //Iterador explicitamente
  
  let palabra = "Hola Mundo";

  // hace lo mismo que
  // for (let char of str) alert(char);
  
  let iterator = palabra[Symbol.iterator]();
  
  while (true) {
    let result = iterator.next();
    if (result.done) break;
    alert(result.value); // retorna los caracteres uno por uno
  }

  //Array like
  let arrayLike = {
    0: "Susana",
    1: "Astudillo",
    2: "Ramirez",
    length: 3
  };

  // for (let item of arrayLike){} //Error no es iterable

  let arr =Array.from(arrayLike);
  alert(arr.pop()); //remueve el ultimo elemento de un array  y lo muestra
  alert(arr.push());
  alert(arr[0]);
  alert(arr[1]);
  alert(arr[2]);