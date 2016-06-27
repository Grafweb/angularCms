"use strict";

app.controller('AddSiteController', AddSiteController);

AddSiteController.$inject = ['$http', 'siteService','categoryMenuService'];
function AddSiteController($http, siteService, categoryMenuService) {
    var vm = this;
    
    siteService.query(
        {},
        function succes(data) {
           vm.idParent = data; 
        },
        function error(err) {
            //add logs
        });
    categoryMenuService.query(
        {},
        function succes(data) {
           vm.idCatagoryMenu = data; 
        },
        function error(err) {
            //add logs
        }
    )
    
    vm.sendSite = function(){
       siteService.save(
           {},
           vm.dataSite,
           null,
           function error(err) {
            //add logs
        });      
    };
    
    vm.addCategoryGalery = function(){
		siteService.addCategoryGalery(vm.categoryGalery).save({category_name: vm.categoryGalery});
	};    
}



