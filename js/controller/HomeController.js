"use strict";

app.controller('HomeController', HomeController);

HomeController.$inject = ['siteService'];
function HomeController(siteService) {
    var vm = this;
    siteService.get(
        {idSite: 0, column:"category"},
        function succes(data) {
           vm.dataSite = data; 
        },
        function error(err) {
            //add logs
        }
    );    
}
