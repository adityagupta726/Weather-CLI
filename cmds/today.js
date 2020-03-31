const getRawWeather = require("../utilities/getRawWeather");
const getLocation = require("../utilities/getLocation");
const ora=require("ora");
module.exports = async function(location){
    const spinner =ora();
    spinner.start();
    if(location==undefined){
       location=await getLocation();
    }
   
  const fullWeather = await getRawWeather(location);
  // 5 days weather
  spinner.stop();
  const TodaysWeather = fullWeather[0];
  const currentState = TodaysWeather["weather_state_name"];
  const temp = Math.ceil(TodaysWeather["the_temp"]);
  // template String syntax=> you can also use normal strings
  console.log(`Current conditions in ${location}
                  ${temp} ${currentState}
                        `);
    
};