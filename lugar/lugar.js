const axios = require( 'axios' );

const getLugarLatitudLongitud = async dir => {

    const encodeURL = encodeURI( dir );
    
    const resp = await axios.get( `https://api.mapbox.com/geocoding/v5/mapbox.places/${ encodeURL }.json?access_token=pk.eyJ1IjoidHJvbmlsbzUzIiwiYSI6ImNraXQ2NTJhNTB5NGUydW9iOThoaGtjNWwifQ.QPT-Dv0j8AZnMEdMX8VEXw` );

    if( resp.data.features.lenght === 0 ) {

        throw new Error( `No hay resultados para [ ${ dir } ]` );
    }

    const data = resp.data.features[ 0 ];
    const direccion = data.place_name;
    const latitud = data.center[ 1 ];
    const longitud = data.center[ 0 ];

    return {
        direccion: direccion,
        latitud: latitud,
        longitud: longitud
    }
};

module.exports = { getLugarLatitudLongitud };