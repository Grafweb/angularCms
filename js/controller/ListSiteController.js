"use strict";

app.controller('ListSiteController', ListSiteController);

ListSiteController.$inject = ['$rootScope','$scope','siteService','$filter'];
function ListSiteController($rootScope, $scope, siteService, $filter) {
    $rootScope.load = true;
    var maxSite = 0;
    var fill = 0;
    var vm = this;
    vm.pageFill = 3;
    vm.page = 0;
    vm.fillPagination = [];
    vm.fullList = [];

    siteService.query(
        {},
        function succes(data) {
           vm.fullList = data; 
           $scope.$emit('loading', { message: true });
        },
        function error(err) {
            //add logs
        });
        
        (vm.page == 0)? vm.pagefirst = true :  vm.pagefirst = false; 

        // vm.$watch('page', function(newValue, oldValue) {
        // (vm.page == 0)? vm.pagefirst = true :  vm.pagefirst = false;
        // });
        
        vm.site = function(number) {
            number--;
            vm.page = number * vm.pageFill;
        }
        
        vm.nextSite = function() {
            if(vm.page<maxSite) vm.page  = vm.page + vm.pageFill;
            return;
        }
        
        vm.prevSite = function() {
            if(vm.page > 0)  vm.page  = vm.page - vm.pageFill;
            return;
        }

    }


