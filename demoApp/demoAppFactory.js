var demoApp = angular.module('demoApp', ['ngRoute']);

demoApp.factory('simpleFactory', function ($http) {
    var factory = {};
    //using $http service to load data from customers.json present in advanced folder
    factory.getCustomers = function () {
        return $http({
            method: 'GET',
            url: '../advanced/customers.json'
        });
    };
    return factory;
});

demoApp.controller('SimpleController', function ($scope, $http, simpleFactory) {
    simpleFactory.getCustomers()
    .then(function successCallBack(response){
        //console.log(response);
        $scope.customers = response.data;
        //console.log($scope.customers);
    },
    function errorCallBack(response){
        console.log(response);
        alert("Error!! Check console");
    });
});

demoApp.config(function ($routeProvider) {
    $routeProvider
        .when('/DemoAppView1',{
            controller: 'SimpleController',
            templateUrl:'DemoAppView1.html'})
        .when('/DemoAppView2',{
            controller: 'SimpleController',
            templateUrl:'DemoAppView2.html'})
        .otherwise({ redirectTo: '/' });
});