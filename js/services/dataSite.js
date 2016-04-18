"use strict";

app.factory('dataSite', function($log,$http, $location,  $httpParamSerializerJQLike, dataSession){
        var dataSite = {
            id_parent: "",
            title: "",
            content: "",
            category: "",
            link: "",
            meta_title: "",
            meta_description: "",
            meta_key: "",
            component_galery: 0,
            category_foto: 0
        }
    return dataSite;
           
});
