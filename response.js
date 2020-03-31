const axios=require("axios");
async function helper(){
    const response = await axios.get("https://www.metaweather.com/api/location/search/?query=london");
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