"use strict";

app.controller('ListFotoController', ListFotoController);

ListFotoController.$inject = ['listFotoGaleryService'];
function ListFotoController(listFotoGaleryService) {
    var vm = this;
    listFotoGaleryService.query( {},
        function succes(data) {
           vm.listFotoCtrl = data; 
        },
        function error(err) {
            //add logs
        });    
}
    