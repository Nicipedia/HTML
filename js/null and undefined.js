var testVariable ;
var isUndefined = (testVariable === undefined);
var isNull = (testVariable === null);
var isEmpty = (testVariable === '');
document.getElementById('isUndefined').innerHTML = isUndefined;
document.getElementById('isNull').innerHTML = isNull;
document.getElementById('isEmpty').innerHTML = isEmpty;

// substitute values to test 
var testVariable = 'ABC';
var testVariable = '';
var testVariable = null;