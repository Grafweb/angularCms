"use strict";

app.controller('EditSiteController', EditSiteController);

EditSiteController.$inject = ['$routeParams', 'dataSite', 'siteService'];
function EditSiteController($routeParams, dataSite, siteService) {
    var vm = this;
    
    vm.dataSite.id_parent = $routeParams.idparent;

    siteService.get(
        {idSite: $routeParams.id, column:"id"},
        function succes(data) {
           vm.dataSite = data; 
        },
        function error(err) {
            //add logs
        });
        
     siteService.query(
        {},
        function succes(data) {
           vm.idParent = data; 
        },
        function error(err) {
            //add logs
     });
     
    //  tinymce.init({
    //     selector: "#contentsite",
    //     language: "pl",
    //     content: vm.dataSite,
    //     setup: function(editor) {
    //         editor.on('change', function(e) {
    //             dataSite.content = e.level.content;
    //         });
    //     }    
    //  });
    
    vm.updateSite = function() {
        if(vm.dataSite.component_galery && vm.dataSite.component_galery != 0)
        {   
            if(vm.category != "" || vm.categoryGalery != "") {
                vm.addFotos();           
            }
        }
    }
    
    siteService.update(
        {idSite: idSite, column:"id"}, 
        vm.dataSite,
        null,
        function error(err) {
            //add logs
        });
}
     
    



app.controller('EditSiteController',['$scope','$http','$routeParams','dataSite','siteService',function($scope, $http, $routeParams, dataSite, siteService) {

dataSite.id_parent = $routeParams.idparent;
console.info("$routeParams.idparent " + $routeParams.idparent);
    
$scope.dataSite = siteService.get({idSite: $routeParams.id, column:"id"});
console.dir($scope.dataSite);

$scope.parent = $routeParams.idparent;

$scope.dataSite.id_parent = $routeParams.idparent;


           
 $scope.parent = dataSite.id_parent;
 console.info('$scope.parent' + $scope.parent);
 
 $scope.category = dataSite.category_foto;
  
    $scope.idParent = siteService.query();
    
 //   $scope.daneParent = siteService.getSite($routeParams.id);
	
   


    $scope.updateSite = function() {
    //    console.dir($scope.datauser);
    console.info("category " + $scope.category + "dataSite.category_foto" + dataSite.category_foto);
        $scope.dataSite.category_foto = $scope.category;
       alert($scope.dataSite.component_galery);
       
        if($scope.dataSite.component_galery && $scope.dataSite.component_galery != 0)
        {   
            if($scope.category != "" || $scope.categoryGalery != "") {
                //dataSite.dataSite add category
                console.info("$scope.category" + $scope.category);
                
                try {
           $scope.addFotos();
            } catch (error) {
                throw "Kurde nie działa";
            }
                        
            }
            
            
            
            
            //dataSite.push({category_foto : $scope.category});
            // $scope.dataSite.category_foto = $scope.category;
            
        }
      //dataSite.component_galery)
       // dataLogin.logoutLogin();
       console.info("dataSite -- ");
       console.dir(dataSite);
       var dats = $scope.dataSite;
       var idSite = $routeParams.id;
      siteService.update({idSite: idSite, column:"id"}, dats);
      
      
      //scope.addFotos
      //dataSite.component_galery
       // debugger;
        //dataEditSite
       
    };

//console.info(dataSite.content);
//tinyMCE.activeEditor.setContent(dataSite.content);

    
}]);