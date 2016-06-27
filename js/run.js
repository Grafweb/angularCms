"use strict";

app.run(runBlock);

runBlock.$inject = ['$rootScope', '$location', 'dataLoginService', '$route'];

function runBlock($rootScope, $location, dataLoginService, $route) {
    var permission = ['/admins'];
    var whereCurrent = $location.path();
    
    $rootScope.$on('$routeChangeStart',function(){
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
        
    });
    
    $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
        $rootScope.title = current.$$route.title;
        $rootScope.description = current.$$route.description;
        $rootScope.keywords = current.$$route.keywords;
        });
}
