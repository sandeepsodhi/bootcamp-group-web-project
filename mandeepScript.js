var request = require('request');

function getData() {
    request('http://api.openweathermap.org/data/2.5/weather?q=London&appid=8d7071faebf065763f900f514ca03c76', function (error, response, body) {
    //   console.log('error:', error); // Print the error if one occurred
    //   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    //   console.log('body:', body); // Print the HTML for the Google homepage.
    if (error) {
        console.log("something went wrong");
        console.log(error);
    } else {
        var parsedData = JSON.parse(body);
        console.log(parsedData);
    }
    });
}
document.getElementById("myBtn").onclick = getData;
