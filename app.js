/*
Apuntes
Registrarse en esta api
https://rapidapi.com/dev132/api/city-geo-location-lookup
https://openweathermap.org/current
*/

const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
const argv = require('./config/yargs').argv;


/*
lugar.getLugarLatLong(argv.direccion)
    .then(console.log);
    */
/*
clima.getClima(-5.710000, -79.279999)
    .then(console.log)
    .catch(console.log);
    */
const getInfo = async(direccion) => {

    try {
        const coords = await lugar.getLugarLatLong(argv.direccion);
        const temp = await clima.getClima(coords.lat, coords.lng);
        return `El clima de ${ coords.direccion } es de ${ temp}.`;
    } catch (e) {
        return `No se pudo determinar el clima de ${ direccion }`;
    }


}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);


//llamamos a la app de la siguiente manera
// node app -d "Lima Peru"