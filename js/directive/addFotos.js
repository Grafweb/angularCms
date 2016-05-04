"use strict";

app.directive('addFotos', addFotos);

function addFotos() {
    var directive = {
        link: link,
        templateUrl: 'htmls/admins/site/addGalery.html',
        restrict: 'AEC',
        transclude: true,
        controller: FotosController
    };
    return directive;

    function link(scope, element, attrs) {
      /* */
    }
}

FotosController.$inject = ['$scope', 'serviceSite', 'listCategoryGaleryService', 'listFotoGaleryService', 'addFotosService'];

function FotosController($scope, siteService, listCategoryGaleryService, listFotoGaleryService, addFotosService) {
    var vm = this;
        vm.addCategoryVisible = false;
   
    listCategoryGaleryService.query( 
        {},
        function succes(data) {
           vm.categoryGal = data; 
        },
        function error(err) {
            //add logs
        });
   
   vm.addCategory = function(){
		listCategoryGaleryService.save({category_name: $scope.categoryGalery});
	};
    
    vm.setCategoryVisible = function() {
       vm.addCategoryVisible ? false : true;
       vm.required ? false : true; 
   }
   
   vm.addFotos = function(){
        vm.plik = document.getElementById("file");
        var resultFile = new FileReader();
        document.getElementById("file").addEventListener("change", function(e){
            var resFile = e.target.files[0].result;
        });
        
        var plik = new FormData();
        var ins=document.getElementById('file').files.length;

        for(var x=0;x<ins;x++)
        {
            plik.append("files[]", document.getElementById('file').files[x]);
         }
        plik.append("category", vm.category);
        plik.append("categorygalery", vm.categoryGalery);
               
        addFotosService.addFiles(plik).then(function(data){
            angular.forEach(data, function(value, key) {
            var myImage = new Image();
            myImage.src = "/images/" + value;
            angular.element("#galery").append(myImage);
            });
            },function(error){
            //add logs
        });
        
        vm.fotos =  listFotoGaleryService.query();  
    }

}