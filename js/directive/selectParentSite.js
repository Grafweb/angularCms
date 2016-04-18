"use strict";

app.directive('selectparentsite', ['serviceSite',function(serviceSite, editSite) {
 return {
    restrict: 'AE',
    controler: 'editSite',
    templateUrl: 'htmls/admins/directive/selectParentSite.html',
    link: function ($scope, element, attrs) {
      
     /// var dataSample = [{'id_parent': '10', 'title': 'darekSample'}, {'id_parent': '10', 'title': 'darekSample'}]
      
      $scope.idParent = serviceSite.listSite().query(function (data){
       data.push({id_parent: 0, title: "Wybierz"}); 
        return data;
      });
      //$scope.idParent.push({id_parent: 0, title: "Podstrona2"})
      
    //  $scope.id_parent = $scope.idParent[0].id_parent;

      
      console.info("$scope.parent2" +  $scope.daneParent.$promise.id_parent);
      //$scope.idParent = dataSample; 
     // console.dir($scope.idParent);
     //https://docs.angularjs.org/api/ng/directive/ngOptions
     //https://github.com/angular/angular.js/issues/1019
    }
  };

}]);
