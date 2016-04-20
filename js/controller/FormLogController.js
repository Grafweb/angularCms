"use strict";

app.controller('FormLogController', FormLogController);

FormLogController.$inject = ['$location', 'dataLoginService', 'dataSessionService'];
function AddCategoryGaleryController($location, dataLoginService, dataSessionService) {
    var vm = this;
    
    vm.sendform = function(user) {
            dataLoginService.login(user)
                    .then( function(msg) {
                    if(msg.data.ses) {
                        vm.loginShow = true;
                    dataSessionService.set('uzytkownik', msg.data.login);
                    $location.path('/admins');
                    } else {
                    $location.path('/admins/login');    
                    }
                });    
        }

}

    