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
