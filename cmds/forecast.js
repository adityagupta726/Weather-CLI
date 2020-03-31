const getRawWeather = require("../utilities/getRawWeather");
const getLocation = require("../utilities/getLocation");
const ora=require("ora");
module.exports = async function(location){
    const spinner=ora();
    spinner.start();
    if(location==undefined){
        location=await getLocation();
     }
    const fullWeather = await getRawWeather(location);
    spinner.stop();
    console.log(`
    Weather forecast ${location}
                                     `);
    fullWeather.forEach(TodaysWeather => {
        const currentState = TodaysWeather["weather_state_name"];
        const applicabledate=TodaysWeather["applicable_date"];
        const mintemp = Math.ceil(TodaysWeather["min_temp"]);
        const maxtemp = Math.ceil(TodaysWeather["max_temp"]);
        // template String syntax=> you can also use normal strings
        console.log(`
                ${applicabledate} - Low: ${mintemp}°  | High: ${maxtemp}° | ${currentState}
                   `);
    });
}
