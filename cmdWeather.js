const axios=require("axios");
const input=process.argv.slice(2);
const location=input[1];
async function helper(){
    try{
    const response = await axios.get("https://www.metaweather.com/api/location/search/?query="+location);
    console.log(response.data);
    const woeid=response.data[0].woeid;
    // const response = await axios.get("https://jsonplaceholder.typicode.com/users");
    console.log(response.data);
    const rawResponse= await axios.get(
        `https://www.metaweather.com/api/location/${woeid}/`
    );
    const TodaysWeather=rawResponse.data["consolidated_weather"][0];
    const currentState = TodaysWeather["weather_state_name"];
    const temp=Math.ceil(TodaysWeather["the_temp"]);
    console.log(`Current conditions in ${location}
                     ${temp} 
                     ${currentState} `);
}catch(err){
    console.log("some error");
}
}
helper();