const axios = require( 'axios' );
const API = '3cdd72d707c0cb55af44af826251cccf';

const getClima = async ( latitud, longitud ) => {

    const resp = await axios.get( `https://api.openweathermap.org/data/2.5/weather?lat=${ latitud }&lon=${ longitud }&appid=${ API }&units=metric` );

    return resp.data.main.temp;

};

module.exports = { getClima };