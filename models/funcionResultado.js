// Resultado de las otras funciones
const suma = require("./funcionSuma");
const resta = require("./funcionResta");

const resultado = (a, b) => {
    const resultadoSuma = suma(a, b);
    const resultadoResta = resta(a, b);
    return suma(resultadoSuma, resultadoResta);
};

module.exports = resultado