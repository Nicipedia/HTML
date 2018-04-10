//var connection = getExternalConnection();
//try {
//  connection.open();
//  connection.callExternalFunction();
//}
//catch(error) {
//    console.log(error.message);
//}
//finally {
//  connection.close();
//}

//try {
//    callExternalFunction();
//    if (result.isNotValid) {
//      throw "issue with external service";
//    }
//  }
//  catch(error) {
//     console.log(error.message);
//  }


function correctMethodName() {  
    return "Output Message";
}

//var result = correctMethodName(3);
//var result = wrongMethodName(3);
//document.writeln(result);

try {
    var result = wrongMethodName(3);
    document.writeln(result);
}
catch (error) {
    document.writeln('An error occurred');
}