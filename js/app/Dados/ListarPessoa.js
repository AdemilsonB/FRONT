var module = angular.module("lembrete");

module.controller("ListarPessoa", ['$scope', '$http', ListarPessoa]);

function Listarpessoa($scope, $http){
    
    var promise = $http.get('http://www.deveup.com.br/notas/api/notes/');

    promise.then(
        // Em caso de sucesso
        function(response){
            if(response.data.length){
                $scope.lembretes = response.data;
            } else {
                $scope.mensagem = "Nenhum lembrete cadastrado.";
            }
        }, 
        // Em caso de erro
        function(response){
            $scope.mensagem = '#Erro ' + response.status;
        }
    );    
}
