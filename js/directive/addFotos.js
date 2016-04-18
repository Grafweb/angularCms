"use strict";

app.directive('addFotos', function(serviceSite, listCategoryGaleryService, listFotoGaleryService) {
 return {
    restrict: 'AEC',
    transclude: true,
    controller: function(serviceSite, listCategoryGaleryService, listFotoGaleryService){
        
    },
    templateUrl: 'htmls/admins/site/addGalery.html',
    link: function (scope, element, attrs) {
   
   scope.category = "";
   scope.categoryGalery = ""; 
   //scope.required = true;
   scope.addCategoryVisible = false; 
   
//    scope.categoryGal = serviceSite.listCategoryGalery().query()
//    .$promise.then(function(data) {
//        scope.categoryGal = JSON.parse(JSON.stringify(data));
//    });
   
   
   scope.categoryGal = listCategoryGaleryService.query();
   console.info("scope.categoryGal " + scope.categoryGal);
   console.dir(scope.categoryGal);
   
   
   scope.addCategory = function(){
		//categoryGalery
		console.info('wykonałem');
		serviceSite.addCategoryGalery(scope.categoryGalery).save({category_name: $scope.categoryGalery});
	};
 
   
   scope.setCategoryVisible = function () {
       scope.addCategoryVisible ? scope.addCategoryVisible = false : scope.addCategoryVisible = true;
       scope.required ? scope.required = false : scope.required = true; 
   console.info('scope.addCategoryVisible' + scope.addCategoryVisible);
   }
   
    
    console.info("scope.categoryGalery" + (scope.categoryGalery.length == 0));
    
    
    //console.info("category" + $scope.categoryGal);
    //$scope.listfoto = serviceSite.listFoto().query();
    
    
    
     scope.addFotos = function(){
       
       
           
        
        scope.plik = document.getElementById("file");
        
        var resultFile = new FileReader();
            
        
        // resultFile.onload = function(e){
        //      var sciezka = e.target.result;
        //     console.info("sciezka " + sciezka);
        // }
        // 
        document.getElementById("file").addEventListener("change", function(e){
            var resFile = e.target.files[0].result;
        console.info(" target " + resFile + " - " + e.target.files[0].name);
        });
        
        
        var plik = new FormData();
        var ins=document.getElementById('file').files.length;

        for(var x=0;x<ins;x++)
        {
            plik.append("files[]", document.getElementById('file').files[x]);
         }
        //plik.append("file", document.getElementById('file').files[0]);
        plik.append("category", scope.category);
        plik.append("categorygalery", scope.categoryGalery);
               
        var $promise =  serviceSite.addGaleryFactory(plik);
          
       
        //var $promise =  serviceSite.addGaleryFactory(document.getElementById('file').files[0], $scope.category);
       
        
        $promise.then(function(data){
          // console.info('data' + data[0]);
          // console.dir(data);
         // alert(data);
          // angular.element(); 
            angular.forEach(data, function(value, key) {
            var myImage = new Image();
            myImage.src = "/images/" + value;
          //  console.info('key ' + key);
            angular.element("#galery").append(myImage);
            });
            //var myImage = new Image(100, 200);
            //myImage.src = 'picture.jpg';
            //console.dir(data);
            //console.info("data"  + data.file.name);
            //http://php.net/manual/en/features.file-upload.multiple.php
        },function(error){
            console.info("error "  + error);
        });
        
        
        }
        
    scope.fotos =  listFotoGaleryService.query();


    }
  };

});



