var app = angular.module('categories', []);
app.controller('catctrl', function ($scope, $http) {
    $http.get("https://backendapi.turing.com/categories")
        .then(function (response) {
            $scope.data = response.data.rows;
        });
});