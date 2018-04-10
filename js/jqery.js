function makeRequests() {
    $.getJSON('http://httpbin.org/ip')
        .done(function(response) {
            alert(JSON.stringify(response));
            $('body > p').text(
                response.origin
            );
        });
}


function makeRequests() {$.ajax({
    url: 'http://www.example.com/api',
    method: 'GET',
    dataType: 'json'
})
    .fail(function() {
        alert('An error has occured')
    });

    $.ajax({
        url: 'http://httpbin.org/get',
        method: 'GET',
        dataType: 'json'
        })
        .done(function(response) {
            $('body > p').text(
                JSON.stringify(response)
            );
        })
        .fail(function() {
            alert('An error has occured')
        });
function makeRequests() {  
    $.get({
        url: 'http://httpbin.org/user-agent',
        dataType: 'json'
    })
        .done(function(response) {
            alert(JSON.stringify(response));
            $('body > p').text(
                response['user-agent']
            );
        });
    }
}
$(document).ready(function () {
    makeRequests();
});

