const readline = require("readline");
const axios=require("axios");
const reader=readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt:">>"
});
reader.prompt();
reader.on("line",function(data){

async function helper(){
    const response = await axios.get("https://www.metaweather.com/api/location/search/?query="+data);
    console.log(response.data);
    response.data.forEach(element => {
             id=element.woeid;
            
    });
    // const response = await axios.get("https://jsonplaceholder.typicode.com/users");
    console.log(response.data);
    const anotherResponse=await axios.get(
        "https://www.metaweather.com/api/location/"+id+"/"
    )
    console.log(anotherResponse.data)
}
helper();
});