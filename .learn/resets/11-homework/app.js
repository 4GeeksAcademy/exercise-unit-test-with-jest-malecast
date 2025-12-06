// Contenido de app.js 
// Esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}
console.log(sum(7,3));

// un euro es:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}
// Función para convertir de Dollar a Yen
function fromDollarToYen(dollars) {
    const euros = dollars / oneEuroIs["USD"];
    const yenes = euros * oneEuroIs["JPY"];
    return yenes;
}
// Función para convertir de Euros a Dollar
function fromEuroToDollar(euros) {
    const dollars = euros * oneEuroIs["USD"];
    return dollars;
}
// Función para convertir de Yenes a Libras
function fromYenToPound(yen) {
    const euros = yen / oneEuroIs["JPY"];
    const pound = euros * oneEuroIs["GBP"];
    return pound;
}

// Exporta la función para usarla en otros archivos 
// (similar a la palabra clave "export" cuando se usa webpack)
module.exports = { sum, fromDollarToYen, fromEuroToDollar,  fromYenToPound  };