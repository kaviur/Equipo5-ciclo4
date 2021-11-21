/*  Calcular los porcentajes de concentración de cada gas
    Recibe los límites superiores de cada gas (100%) a ser analizado
    Retorna un objeto con el porcentaje que indica el nivel de concentración de cada gas
*/
const calcularPocentajes = (limiteCO, limiteCO2, limiteHC, limiteO2, valorCO, valorCO2, valorHC, valorO2) => {
    let datosPorGas = [[limiteCO,valorCO,'porcentajeCO'],[limiteCO2,valorCO2,'porcentajeCO2'],[limiteHC,valorHC,'porcentajeHC'],[limiteO2,valorO2,'porcentajeO2']];
    let nivelEmisiones = {};

    for(let i=0; i<datosPorGas.length; i++){
        let porcentaje = datosPorGas[i][0]===0?0:datosPorGas[i][1]/(datosPorGas[i][0]/100);
        Object.defineProperty(nivelEmisiones,datosPorGas[i][2],{value:porcentaje,writable:true,enumerable: true,
            configurable: true}); 
    }
    return nivelEmisiones;
}
const registrarCO = (value) => {
    if (value >= rangosCO[0].de && value <= rangosCO[0].hasta) {
        console.log(rangosCO[0].etiqueta)
        return rangosCO[0].etiqueta;
    }
    if (value >= rangosCO[1].de && value <= rangosCO[1].hasta) {
        console.log(rangosCO[1].etiqueta)
        return rangosCO[1].etiqueta;
    }
    if (value > 15 || value < 0) {
        console.log("fuera_de_rango")
        return "fuera_de_rango";
    }

}
const registrarCO2 = (value) => {
    if (value >= rangosCO2[0].de && value <= rangosCO2[0].hasta) {
        console.log(rangosCO2[0].etiqueta)
        return rangosCO2[0].etiqueta;
    }
    if (value >= rangosCO2[1].de && value <= rangosCO2[1].hasta) {
        console.log(rangosCO2[1].etiqueta)
        return rangosCO2[1].etiqueta;
    }
    if (value > 30 || value < 0) {
        console.log("fuera_de_rango")
        return "fuera_de_rango";
    }

}
const registrarHC = (value) => {
    if (value >= rangosHC[0].de && value <= rangosHC[0].hasta) {
        console.log(rangosHC[0].etiqueta)
        return rangosHC[0].etiqueta;
    }
    if (value >= rangosHC[1].de && value <= rangosHC[1].hasta) {
        console.log(rangosHC[1].etiqueta)
        return rangosHC[1].etiqueta;
    }
    if (value > 11000 || value < 0) {
        console.log("fuera_de_rango")
        return "fuera_de_rango";
    }

}
const registrarO2 = (value) => {
    if (value >= rangosO2[0].de && value <= rangosO2[0].hasta) {
        console.log(rangosO2[0].etiqueta)
        return rangosO2[0].etiqueta;
    }
    if (value >= rangosO2[1].de && value <= rangosO2[1].hasta) {
        console.log(rangosO2[1].etiqueta)
        return rangosO2[1].etiqueta;
    }
    if (value > 30 || value < 0) {
        console.log("fuera_de_rango")
        return "fuera_de_rango";
    }
}

/*global.rangosCO = [
    { etiqueta: 'Parametro CO en rango estandar', de: 0, hasta: 10 },
    { etiqueta: 'Parametro CO fuera de rango', de: 11, hasta: 15 }
]
global.rangosCO2 = [
    { etiqueta: 'Parametro CO2 en rango estandar', de: 0, hasta: 20 },
    { etiqueta: 'Parametro CO2 fuera de rango', de: 21, hasta: 30 }
]
global.rangosHC = [
    { etiqueta: 'Parametro HC en rango estandar', de: 0, hasta: 10000 },
    { etiqueta: 'Parametro HC fuera de rango', de: 10001, hasta: 11000 }
]
global.rangosO2 = [
    { etiqueta: 'Parametro O2 en rango estandar', de: 0, hasta: 22 },
    { etiqueta: 'Parametro O2 fuera de rango', de: 23, hasta: 30 }
]*/


module.exports.registrarCO = registrarCO;
module.exports.registrarCO2 = registrarCO2;
module.exports.registrarHC = registrarHC;
module.exports.registrarO2 = registrarO2;
//module.exports.calcularPorcentajes = calcularPorcentajes;
module.exports.calcularPocentajes = calcularPocentajes;