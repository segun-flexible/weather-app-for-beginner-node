const axios = require("axios");

const getWeather = (city,cb)=>{
    axios.get(`https://api.weatherbit.io/v2.0/current?city=${city}&key=e2f37e4e4c634c8995a852fe557f2386`).then(res =>cb(undefined,res.data.data[0])).catch(err => {
        
        
        if(err.message.includes("ENOTFOUND")){
            return cb("No Internet Connection",undefined)
        }
        else if(err.message.includes("Cannot")){
            return cb("Location not found!",undefined)
        }
        else if(err.message.includes('ETIMEDOUT')){
return cb("No Internet Connection",undefined)
        }
        else{
            return cb(err.message,undefined)
        }
        
        })
}

module.exports = getWeather