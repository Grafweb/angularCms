"use strict";

app.controller('AddCategoryGaleryController', AddCategoryGaleryController);

AddCategoryGaleryController.$inject = ['siteService', 'listCategoryGaleryService'];
function AddCategoryGaleryController(siteService, listCategoryGaleryService) {
    var vm = this;
    vm.addCategoryGalery = function(){
		listCategoryGaleryService.save(
            {},
            {category_name: vm.categoryGalery},
            null,
            function error(err) {
            //add logs
            });
	};    
}
