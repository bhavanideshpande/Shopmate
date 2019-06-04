var app = angular.module('departments', []);
app.controller('depctrl', function ($scope, $http) {
    $http.get("https://backendapi.turing.com/departments")
        .then(function (response) {
            $scope.data = response.data;
            
        });

});