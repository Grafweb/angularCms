"use strict";

app.controller('AdminWelcomController', AdminWelcomController);

AdminWelcomController.$inject = ['$rootScope', '$scope'];
function AdminWelcomController($rootScope, $scope) {
    var vm = this;
    vm.user =  $rootScope.user; 
    
    $scope.$on('$viewContentLoaded', function(event){ 
        $rootScope.load = false;
        console.info("$rootScope.load2" + $rootScope.load);
     });       
}
    