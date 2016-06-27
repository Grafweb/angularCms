"use strict";

app.run(runBlock);

runBlock.$inject = ['$rootScope', '$location', 'dataLoginService', '$state'];

function runBlock($rootScope, $location, dataLoginService, $state) {
 
    var permission = ['/admins'];
    var whereCurrent = $location.path();
    $rootScope.load = true;

    $rootScope.$on('$stateChangeStart',function(){
        if(whereCurrent.search(permission) != -1){    
           var check = dataLoginService.isLogin();
           check.then(function(msg){
               if(!msg.data.login) {
                   $rootScope.loginShow = false;
                   $rootScope.user = "";
                   $location.path('/admins/login');
               } else { 
                   $rootScope.loginShow = true;
                   $rootScope.user = msg.data.user || "";
               }
           });
            
            $rootScope.siteMenu = false;
            
        } else {
            $rootScope.siteMenu = true;
        }
        
    $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
        $rootScope.title = $state.current.title;
        $rootScope.description = $state.current.description;
        $rootScope.keywords = $state.current.keywords; 
    });

    });
    
     

}
