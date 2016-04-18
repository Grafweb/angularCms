"use strict";

app.factory('dataSession', function(){
    return {
        set : function(key, val){
           return sessionStorage.setItem(key, val);
        }, 
        get: function(key) {
            return sessionStorage.getItem(key);
        },
        del: function(key) {
            return sessionStorage.removeItem(key);
        }
        
    }       
});
    