const { argv } = require( './config/yargs' );
const lugar = require( './lugar/lugar' );
const clima = require( './clima/clima' );
const info = require( './info/info' );

info.getInfo( argv.direccion )
    .then( console.log )
    .catch( console.log );