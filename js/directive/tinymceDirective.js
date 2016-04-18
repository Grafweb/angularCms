"use strict";

app.directive('tinymceDirective', ['serviceSite',function(serviceSite, editSite) {
 return {
    restrict: 'AE',
    controler: 'editSite',
    templateUrl: 'htmls/admins/directive/selectParentSite.html',
    link: function (scope, element, attrs) {
      
    tinymce.init({
        selector: "#contentsite",
        language: "pl",
        content: vm.dataSite,
        setup: function(editor) {
            editor.on('change', function(e) {
                dataSite.content = e.level.content;
            });
        }    
     });
      
    }
  };

}]);
