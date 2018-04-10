var $elem = document.getElementById('output');   
$elem.innerHTML += 4 + 6;
$elem.innerHTML += 4 + 6 + ' Demo';
$elem.innerHTML += 'Demo ' + 4 + 6;
$elem.innerHTML += 'Demo ' + (4 + 6);

var cars = ["Saab", "Volvo", "BMW"];
cars[0] // Saab
cars[1] // Volvo
cars[2] // BMW

var cars = new Array("Saab", "Volvo", "BMW");

var myArray = [];
myArray[0] = Date.now;
myArray[1] = myFunc;
myArray[2] = new Array("Demo", "Test");

