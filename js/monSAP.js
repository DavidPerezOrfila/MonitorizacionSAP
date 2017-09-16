
var monSAP = angular.module("monSAP", ['ngRoute']);


//Configuramos las rutas
monSAP.config(function($routeProvider) {
  $routeProvider

    
    .when("/SAPR3", {
      templateUrl: "SAPR3.html",
      controller: "refreshController"

    })

    .when("/iseries", {
      templateUrl: "iseriesPool.html",
      controller: "refreshController"

    })

    .when("/power8", {
      templateUrl: "power8.html",
      controller: "refreshController"

    })

    .when("/power7", {
      templateUrl: "power7.html",
      controller: "refreshController"

    })

    .when("/netweaver", {
      templateUrl: "SAPNW.html",
      controller: "refreshController"

    })

    .when("/crm", {
      templateUrl: "SAPCRM.html",
      controller: "refreshController"

    })

    .when("/Oracle", {
      templateUrl: "Oracle.html",
      controller: "refreshController"

    })
});

monSAP.controller("refreshController", function($scope, $interval, $route) {
  $scope.counter = 0;
  var refresco=1;
  $scope.Minute = function() {
    $scope.message = "Refresco iniciado!";
    $scope.Contador = $interval(function() {
          $scope.counter += 1;
    }, 1000);
    refresco= 2;
    console.log(refresco);    
    $scope.Refresh = $interval(function() {      
        location.reload();        
    }, 60000);    
  }; 

  $scope.Minute3 = function() {
    $scope.message = "Refresco iniciado!";
    $scope.Contador = $interval(function() {
          $scope.counter += 1;
    }, 1000);
    refresco= 3;
    console.log(refresco);     
    $scope.Refresh = $interval(function() {
          location.reload();
    }, 180000);
  };

  $scope.Minute5 = function() {
    $scope.message = "Refresco iniciado!";
    $scope.Contador = $interval(function() {
          $scope.counter += 1;
    }, 1000);
    refresco= 5;
    console.log(refresco); 
    $scope.Refresh = $interval(function() {
          location.reload();
    }, 300000);
  };

  $scope.Stop = function () {
    refresco= 7;
    console.log(refresco); 
    $scope.message = "Refresco parado!";
    if(angular.isDefined($scope.Contador)){
      $scope.counter = 0;
      $interval.cancel($scope.Contador);      
    }
  };

  
    $scope.$on('$viewContentLoaded', function(){
      console.log(refresco);
      switch (refresco) {
        case 1:
          $scope.Minute5();
          break;
        case 2: 
          $scope.Minute();
          break;
        case 3:
          $scope.Minute3();
        case 5:
          $scope.Minute5();
      }
  })
});