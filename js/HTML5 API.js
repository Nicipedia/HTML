//localStorage Object
//The localStorage object stores data that does not expire. This data is available even after the user has closed the browser or shut down the computer.
localStorage.setItem("lastname", "Smith");
localStorage.getItem("lastname");

//sessionStorage Object
//The sessionStorage object stores data for a single session. If you close a browser window or tab, the data is lost.
sessionStorage.clickcount = Number(sessionStorage.clickcount) + 1;
var getClickCount = 'Click Count: ' + sessionStorage.clickcount;

//Geolocation
//First, use the getCurrentPosition() function to get the user's current position. The data returned is the latitude and longitude of the user. The function takes a callback parameter and will invoke this function once it has determined the location:

function getPositionResult(position) {
    console.log(position.coords.latitude + ' ' + position.coords.longitude);
}
navigator.geolocation.getCurrentPosition(getPositionResult);
// Watch Position
//The watchPosition() function invokes the callback function as the user moves so that you can track their position over time. To stop watching the user's position, invoke the clearWatch() function.

function refreshPosition(position) {
    var list = document.getElementById('positionList');
    list.innerHtml += ('<li>' + position.coords.latitude + ' ' + position.coords.longitude + '</li>');
}
navigator.geolocation.watchPosition(refreshPosition);

