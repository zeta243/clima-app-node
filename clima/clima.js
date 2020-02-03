const axios = require('axios');

const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=0d4a32268189bd49dccc641798ce8219&units=metric`)
    return resp.data.main.temp;
}

module.exports = {
    getClima
}