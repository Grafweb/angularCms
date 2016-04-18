"use strict";


"use strict";

app.controller('AddSiteController', AddSiteController);

AddSiteController.$inject = ['$http', 'dataSite', 'siteService','categoryMenuService'];
function AddSiteController($http, dataSite, siteService, categoryMenuService) {
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




app.controller('AddSiteController',function($scope, $http, dataSite, siteService) {
    
$scope.dataSite = dataSite;
  
//$scope.dataSite.content.$modelValue;//.$setViewValue("darek");

$scope.idParent = siteService.query();



$scope.idCatagoryMenu = siteService.categoryMenuSite().query()
/*.$promise.then(function(data){
    console.info('sekces');
    debugger;
    return data;
},
function(error){
    console.info('błąd ' + error);
})*/;

    $scope.sendSite = function(){
    //    console.dir($scope.datauser);
        
       // dataLogin.logoutLogin();
      siteService.addSite();
       console.dir(dataSite);
       console.info(" wysłano" + tinyMCE.activeEditor.getContent());
      // debugger;
        //dataEditSite
       
    };

//$setViewValue(value, trigger);
/*
$scope.check = function () {
  console.log($scope.formData.searchText.$modelValue); //works
}
*/

    $scope.darek = "dataSite";
	   
  tinymce.init({
        selector: "#contentsite",
        language: "pl",
        setup: function(editor) {
        editor.on('change', function(e) {
            console.log('change event', e.level.content);
            dataSite.content = e.level.content;
        });
    }


}); 
    
});