"use strict";

app.factory('serviceSite', function($log,$http, $q, $resource, $location,  $httpParamSerializerJQLike, dataSite){
   
   
   
    return {
        addSite : function() {
            $http({ 
                url: 'data/addSite.php',
                method: 'POST', 
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $httpParamSerializerJQLike({id_parent : dataSite.id_parent,
                                                  title : dataSite.title, 
                                                  content : dataSite.content,
                                                  category : dataSite.category,
                                                  meta_title : dataSite.meta_title,
                                                  meta_description : dataSite.meta_description,
                                                  meta_key : dataSite.meta_key,
                                                  component_galery: dataSite.component_galery,
                                                  category_foto: dataSite.category_foto
                }) }).success(function(response){
                    console.info("response" + response);
                });
        	},            
            listSite : function(){
                var list = $resource('/data/listSite.php',{query: {method: "GET", isArray:true}}).query();
                 
                // return  $resource('/data/listSite.php',{query: {method: "GET", isArray:false}});
                // return list.query(function(data){
                //     return data;
                // });
                
                
                
                return list;
            },
            deleteSite : function(idDelete) {
                console.info('wykonałem delete' + idDelete);
                var $promise  =  $resource('/data/restSite.php/' + idDelete,{delete: {method: "DELETE"}});
                //'delete': {method:'DELETE'}
                return $promise;
            },
            getSite : function(idSite, column) {
                console.info('wykonałem update' + idSite);
                //var datas  =  $resource('/data/restSite.php/:idSite' + idSite,{get: {method: "GET", isArray:false}});
                var datas  =  $resource('/data/restSite.php/:idSite/:column',{idSite: idSite, column: column});
                //,{idSite: '@idSite'}
                //var data  =  $resource('/data/restSite.php/',{id:'@id'});
                //'delete': {method:'DELETE'}
                return datas.get();
                
                /*
                .$promise.then(
                    function succes(data) {
                        return data;
                    }
                );
                
                 */
            },
            updateSite : function() {
                //console.info('wykonałem update' + idSite);
                //var $promise  =  $resource('/data/restSite.php/' + idSite,
                
                var data = $resource('/data/restSite.php/:idSite',
                null,
                //{id_parent: '23'},
                {update: {method: "PUT"}});
                //'delete': {method:'DELETE'}
                //{id:'@id',id_parent: '@id_parent', title: '@title',content: '@content', category: '@category', meta_title: '@meta_title', meta_description: '@meta_description', meta_key: '@meta_key'},
                
                return data;
            },
            categoryMenuSite : function(){
                return  $resource('/data/categoryMenu.php',{},{query: {method: "GET", isArray:true,
                transformResponse: function(data, headersGetter){
                    console.info('models');
                     var items = angular.fromJson(data);
                     console.info(items);
                    var models = [];
                    models.push(items);
                    /*angular.forEach(items, function(item) {
                    models.push(item);
                    });*/
                    console.dir(models);
                    return models;
                    //http://stackoverflow.com/questions/28911239/angularjs-resource-converting-query-resource-list-to-array-of-objects
                }
                }});
            },
         addGaleryFactory : function(plik) {
             
               var deferred = $q.defer();
             
             $http({
             url: 'data/addGalery.php',
             method: 'POST',
            headers: {'Content-Type': undefined },
            transformRequest: angular.identity,
            /*transformRequest: function(data, headersGetter, status) {
              headersGetter = {'Content-Type': undefined };
             var plik = new FormData();
               plik.append("file", plik);
                plik.append("categorygalery", category);
                //$httpParamSerializerJQLike
              return  plik;  
            },*/
           // data: {file : plik, categorygalery : category}
             data: plik
            //https://developer.mozilla.org/en-US/docs/Web/API/FormData/append
        }).
        success(function (data, status, headers, config) {
            
            deferred.resolve(data);
            //var mojedande = JSON.parse(data);
          //  console.info("data"  + data.file.name);
          // angular.element(".galeria").append("<img src='phptest/" + data.file.name + "' >");
           
            //$(".galeria").append();
        }).
        error(function (data, status, headers, config) {
            deferred.reject(data);
            alert("failed!");
        });
        
        return deferred.promise;
        
         },
         addCategoryGalery : function(categoryName){
             console.info("categoryName " + categoryName);
         // var deferred = $q.defer();
          var dataCategory = $resource('/data/addCategoryGalery.php'
          ,{category_name: categoryName}
          ,{'save': {method:'POST', transformRequest : function(data, headersGetter) {
                headersGetter = { 'Content-Type': 'application/x-www-form-urlencoded' };
               // alert("s");
                console.info("data " + data);
                var dane =  $.param(data);
                
                return dane;
            }, headers : { 'Content-Type': 'application/x-www-form-urlencoded' }}});
          console.info('wykonałem 2');
          //http://www.dotnet-tricks.com/Tutorial/angularjs/HM0L291214-Understanding-$emit,-$broadcast-and-$on-in-AngularJS.html
              return dataCategory;
            //  return data;
              
         },
         listCategoryGalery : function() {
             //categoryMenu
          var catResource = $resource('/data/addCategoryGalery.php',{},{query: {method: 'get', isArray: true}}).query();    
//              catResource.$promise.then(function(data) {
//       return  categoryMenu = JSON.parse(JSON.stringify(data));
//         //JSON.parse(JSON.stringify(data));
//    });         
       return catResource;
       
            //return  $resource('/data/addCategoryGalery.php',{},{query: {method: 'get', isArray: true}});
            
         },
         listFotoGalery : function() {
             
             return  $resource('/data/listFoto.php',{},{query: {method: 'get', isArray: true}});
         }
            
        }
        
        
    });
/*title: "",
            content: "",
            metatitle: "",
            metadesc: "",
            metakey: ""idparent*/