"use strict";

app.controller('ListSiteController',function($scope, $http, $filter, $location, dataSite, siteService) {
    
//$scope.dataSite = dataSite;
  
//$scope.dataSite.dataSite.content.$modelValue;//.$setViewValue("darek");


$scope.pageFill = 3;
$scope.page = 0;
$scope.fillPagination = [];
var maxSite = 0;
var fill = 0;



var listSite = siteService.query();


$scope.fullList = listSite; 

 ($scope.page == 0)? $scope.pagefirst = true :  $scope.pagefirst = false; 

$scope.$watch('page', function(newValue, oldValue) {
  ($scope.page == 0)? $scope.pagefirst = true :  $scope.pagefirst = false;
  console.info("Now I have done");
});


//($scope.page == 0)? $scope.pagelast = true :  $scope.pagelast = false; 


console.info("$scope.pagefirst " + $scope.pagefirst);

//$scope.sikorski = false;

$scope.site = function(number) {
    console.info("number" + number);
    number--;
    $scope.page = number * $scope.pageFill;
}

$scope.nextSite = function() {
    if($scope.page<maxSite) $scope.page  = $scope.page + $scope.pageFill;
    console.info("$scope.page next " + $scope.page);
    return;
    //$scope.page = number * $scope.pageFill;
}

$scope.prevSite = function() {
    if($scope.page > 0)  $scope.page  = $scope.page - $scope.pageFill;
   
    console.info("$scope.page prev " + $scope.page);
    return;
    //$scope.page = number * $scope.pageFill;
}



listSite.$promise.then(
    function(data) {
        maxSite = data.length;
        console.info('maxSite %d', maxSite);
        fill = data.length / $scope.pageFill;
        if(data.length % $scope.pageFill != 0) fill++;
       for(var i=1; i<=fill; i++) {
        $scope.fillPagination.push(i);   
       }
        //$scope.fillPagination = data.length;
        
        console.info("$scope.fillPagination " + $scope.fillPagination);
        return data;
    }
);



//console.dir("desi" + dssi);

console.info("$scope.fullList.length " + $scope.fullList.length + "$scope.fillPagination" + $scope.fillPagination);



var filter = $filter('orderBy'); 

$scope.sort = function(objectSort, reverse){
  $scope.fullList = filter($scope.fullList, objectSort, reverse);
  console.info('wykonalem');
};


//$scope.fullList = getList.query();

$scope.searchTitle = "";
$scope.searchDescription = "";

$scope.wchichSite = function(params) {
    
}

console.info("getList2" + $scope.fullList);

$scope.editSite = function(idSite, idParent) { 

console.info('wykonałem edit site');
$location.path('/admins/editSite/' + idSite + '/' + idParent);
  
}; 

 
$scope.delSite = function(idSite) { 

  siteService.deleteSite(idSite).delete(function(){
    
 getList = siteService.query(function(data){
	$scope.fullList = data;
	//console.info("getList" + $scope.fullList);
  
  
      }); 
  
   });
  
  };
  
  
  });
  //https://scotch.io/tutorials/sort-and-filter-a-table-using-angular

/*
.then(function(data){
      console.info('wykonałem delete');
  }, function(datas) {
    console.info('nie wykonałem delete');
  })
 */
  
