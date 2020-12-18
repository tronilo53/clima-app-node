const lugar = require( '../lugar/lugar' );
const clima = require( '../clima/clima' );

const getInfo = async dir => {

    try {
        
        const coordenadas = await lugar.getLugarLatitudLongitud( dir );
        const temperatura = await clima.getClima( coordenadas.latitud, coordenadas.longitud );
        return `El clima de ${ coordenadas.direccion } es de ${ temperatura }ºC`;
    } catch (error) {
        
        return `No se pudo determinar el clima de ${ dir }`;
    }


};

module.exports = { getInfo };