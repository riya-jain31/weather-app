// a849f1413213dea07377caf6d6323584

function sendReq(){
    const Promise=
    fetch("https://api.weatherstack.com/current?access_key=79851ffaf00d1ddb562a5ce58338f114&query=pune");

    Promise
    .then(res => res.json())
    .then(data =>{
        console.log(data);
    })
    .catch ((err)=> console.log(err))
}