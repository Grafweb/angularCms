"use strict";

app.factory('dataLoginService', function($log,$http, $location,  $httpParamSerializerJQLike, dataSession){
    return {
        login : function(user){
           var $promise = $http({ 
                url: 'data/logowanie.php',
                method: 'POST', 
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $httpParamSerializerJQLike(user) });
        
        return $promise;
        
        },
        isLogin: function(){
           // console.info("dataSession.get('uzytkownik')" + dataSession.get('uzytkownik')+ " - " + sessionStorage.getItem('uzytkownik'));
            var $sesionCheck = $http.post('data/checkLogin.php');
            return $sesionCheck;
        },
        logoutLogin: function(){
           // console.info("dataSession.get('uzytkownik')" + dataSession.get('uzytkownik')+ " - " + sessionStorage.getItem('uzytkownik'));
            $http.post('data/destroyLogin.php');
            dataSession.del('uzytkownik');
            $location.path('/admins/login');
        }
    }       
});
