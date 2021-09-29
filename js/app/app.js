var module = angular.module('pessoas', ['ngRoute']);

module.config(['$routeProvider', function($routeProvider)
{
    $routeProvider
        .when('/', 
        {
            controller: 'ListarPessoa',
            templateUrl: 'template/listar.html'
        })
        .when('/criar', 
        {
            controller: 'CadastrarPessoa',
            templateUrl: 'template/criar.html'
       }
);