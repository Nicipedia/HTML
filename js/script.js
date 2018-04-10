function startLogic() {
    var newHtml = '<em>New Header</em>';
    document.getElementById('headerItem').innerHTML = newHtml;
}
startLogic();
    function doMore() {
        alert('I could process more logic here');
        }
    function doSomethingElse() {
            document.writeln('Test Message');
        }
    function clickHandler(callback) {
        alert('This button has been clicked');
            if (callback) {
                callback();
        }
}   
