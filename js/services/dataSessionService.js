"use strict";
    
app.factory('dataSessionService', dataSessionService);

//dataSessionService.$inject = [''];
function dataSessionService() {
    var service = {
        set : set,
        get : get,
        del : del
    }
    
    return service;    
 
    function set(key, val){
        return sessionStorage.setItem(key, val);
    }

    function get(key) {
        return sessionStorage.getItem(key);
    }

    function del(key) {
        return sessionStorage.removeItem(key);
    }
}