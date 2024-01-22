'Use strict'
let user = {
    name: "Soledad",
    age: 42,
    blood: "A+"
  };
  
  // bucle sobre los valores
  for (let value of Object.values(user)) {
    alert(value); // John, luego 30
  }

  ///////////////////////////////////////
  // TRANSFORMANDO OBJETOS
  
  let prices = {
    banana: 1,
    orange: 2,
    meat: 4,
  };
  
  let doublePrices = Object.fromEntries(
    // convertir precios a array, map - cada par clave/valor en otro par
    // y luego fromEntries nos devuelve el objeto
    Object.entries(prices).map(([key, value]) => [key, value * 2])
  );
  
  alert(doublePrices.meat); // 8