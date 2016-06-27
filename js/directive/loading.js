"use strict";
app.directive('loading', loading);

function loading() {
    var directive = {
        replace: true,
        link: link,
        controller: controller,
        templateUrl: 'htmls/admins/directive/loading.html',
        restrict: 'AE',
    };
    return directive;

    function controller($rootScope, $scope, $state) {
        $rootScope.$on('loading', function(event, data){
            $rootScope.load = false;
        });
        
     }

    function link(scope, element, attrs) {
      console.info("scope.load" + scope.load);
    }
}
