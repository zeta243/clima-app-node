const direccion = {
    alias: 'd',
    desc: 'Dirección de la ciudad para obtener el clima',
    demand: true
}

const argv = require('yargs').options({
        direccion
    })
    .help()
    .argv


module.exports = {
    argv
}