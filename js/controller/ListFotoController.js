"use strict";

app.controller('ListFotoController',function($scope, siteService) {
    
//	 var deferred = $q.defer();
	
    $scope.listFotoCtrl = function(){
		//categoryGalery
		console.info('wykonałem');
		
/*	var promise = siteService.listFotoGalery().query();
		promise.then(
			function(data){
				console.dir(data);
				return data;
			}, 
			function(err) {
				console.info('błąd ' + err);
			}
		);*/
		
	return	siteService.listFotoGalery().query();
	};
 
    
});
    