"use strict";

app.factory('dataLoginService', dataLoginService);

dataLoginService.$inject = ['$http', '$location',  '$httpParamSerializerJQLike', 'dataSessionService'];
function dataLoginService($http, $location,  $httpParamSerializerJQLike, dataSessionService) {
    var service = {
        login : login,
        isLogin : isLogin,
        logoutLogin : logoutLogin
    }
    
    return service;    
}

function login(user) {
    return $http({ 
                url: 'data/logowanie.php',
                method: 'POST', 
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $httpParamSerializerJQLike(user) 
            });
}

function isLogin() {
    return $http.post('data/checkLogin.php');
}

function logoutLogin() {
    $http.post('data/destroyLogin.php');
    dataSession.del('uzytkownik');
    $location.path('/admins/login');
}