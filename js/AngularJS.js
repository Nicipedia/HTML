
angular.module('sampleApp', [])
.controller('sampleController', function($scope) {
    $scope.value = 1;
    $scope.increment = function () {
      $scope.value++;
    }
});

var app = angular.module('basicApp', []);
app.controller('homeController', function ($scope) {
    $scope.uname = "demouser";
    $scope.testMe = function () {
        $scope.uname += "123";
    };
});