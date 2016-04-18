"use strict";

app.controller('AddGaleryController', AddGaleryController);

AddGaleryController.$inject = ['siteService', '$filter', 'listCategoryGaleryService', 'listFotoGaleryService','addFotosService'];
function AddGaleryController(siteService, $filter, listCategoryGaleryService, listFotoGaleryService, addFotosService) {
    var vm = this;
    
    listFotoGaleryService.query(
        {},
        function succes(data) {
           vm.fotos = data; 
        },
        function error(err) {
            //add logs
        });
    
    listCategoryGaleryService.query(
        {},
        function succes(data) {
           vm.categoryGal = data; 
        },
        function error(err) {
            //add logs
        }
    );
    
     vm.addFotos = function(){
        var filesAll = document.getElementById("file");
        var nameFile = filesAll.files[0].size;
        var resultFile = new FileReader();
        var plik = new FormData();
        var ins = filesAll.files.length;

        for(var x=0;x<ins;x++)
        {
            plik.append("files[]", filesAll.files[x]);
         }
        plik.append("category", vm.category);
                
        addFotosService.addFiles(plik)
                    .success(function(data){
                            angular.forEach(data, function(value, key) {
                            var myImage = new Image();
                            myImage.src = "/images/" + value;
                            angular.element("#galery").append(myImage);
                            });                        
                        }). error(function(error){
                           //add logs 
                        });
        
        }
}

// app.controller('AddGaleryController',function($scope, serviceSite, $filter) {
    
//    $scope.categoryGal = serviceSite.listCategoryGalery().query()
//    .$promise.then(function(data) {
//        $scope.categoryGal = JSON.parse(JSON.stringify(data));
//         //JSON.parse(JSON.stringify(data));
//    });
   
//    $scope.category = 1;
    
    
//     //console.info("category" + $scope.categoryGal);
//     //$scope.listfoto = serviceSite.listFoto().query();
    
    
    
//      $scope.addFotos = function(){
        
//         $scope.plik = document.getElementById("file");
        
//         var nameFile = document.getElementById("file").files[0].size;
//         console.info(nameFile + " target ");
        
//         var resultFile = new FileReader();
            
        
//         resultFile.onload = function(e){
//              var sciezka = e.target.result;
//             console.info("sciezka " + sciezka);
//         }
        
//         document.getElementById("file").addEventListener("change", function(e){
//             var resFile = e.target.files[0].result;
//         console.info(" target " + resFile + " - " + e.target.files[0].name);
//         });
        
        
//         var plik = new FormData();
//         var ins=document.getElementById('file').files.length;

//         for(var x=0;x<ins;x++)
//         {
//             plik.append("files[]", document.getElementById('file').files[x]);
//          }
//         //plik.append("file", document.getElementById('file').files[0]);
//         console.info("1" + $scope.category);
//         plik.append("category", $scope.category);
                
//         var $promise =  serviceSite.addGaleryFactory(plik);
       
//         //var $promise =  serviceSite.addGaleryFactory(document.getElementById('file').files[0], $scope.category);
       
        
//         $promise.then(function(data){
//             console.info('data' + data[0]);
//           // angular.element(); 
//             angular.forEach(data, function(value, key) {
//             var myImage = new Image();
//             myImage.src = "/images/" + value;
//             console.info('key ' + key);
//             angular.element("#galery").append(myImage);
//             });
//             //var myImage = new Image(100, 200);
//             //myImage.src = 'picture.jpg';
//             //console.dir(data);
//             //console.info("data"  + data.file.name);
//             //http://php.net/manual/en/features.file-upload.multiple.php
//         },function(error){
//             console.info("error "  + error);
//         });
        
        
//         }
    
// $scope.fotos =  serviceSite.listFotoGalery().query();

// /* 

// .$promise.then(
//      function (data) {
//          console.info(data);
         
//             //var dataFotos = [];
//             var convertJson = JSON.parse(JSON.stringify(data));
            
//             var filt = $filter('filtersGalery')(convertJson, $scope.category);
            
//             for (var key in filt) {
//             if (filt.hasOwnProperty(key)) {
//             //    alert[key];
//             console.info('key' + key + "convertJson " + filt.length);
//             var myImage = new Image(100);
//             myImage.src = "/images/" + filt[key]["images"];
//            // console.info(value[key]);
//            //dataFotos.push(myImage);
//             //angular.element("#galery").append(myImage);
//             //alert(convertJson[key]["images"]);
//             }
            
            
//             //console.info(convertJson[key]["images"]);
//             }
//             //http://www.thonky.com/javascript-and-css-guide/javascript-image-preload
//           //   console.info("leng " + convertJson[0]);
//             // for(i in convertJson) {
//               //   console.info(convertJson[i].images);
//             // }
//                 // console.info(i.images);
//              //}
//              //http://stackoverflow.com/questions/1078118/how-do-i-iterate-over-a-json-structure
//            // angular.forEach(convertJson, function(value, key) {
//             //var myImage = new Image();
//             //myImage.src = "/images/" + value;
//            // console.info(value[key]);
//             //angular.element("#galery").append(myImage);
//             //});
//             return convertJson;
//         },
//         function(err){
//             alert('Greeting ' + err);
            
//             })

// */


        
    
// });



        