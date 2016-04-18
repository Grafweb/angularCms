"use strict";

app.filter('filtersDescription',function() {
    
 return function (items, searchTitle) {
   
   /*debugger;*/
  // console.info("searchTitle" + searchTitle.title);
   
   var filtered = [];
   
  
    
	   //foreCH
     var searchLenght =  searchTitle.lenght;
    var letterMatch = new RegExp(searchTitle, 'i');
    for (var i = 0; i < items.length; i++) {
      var item = items[i];
      if (letterMatch.test(item.meta_description.substring(0, searchLenght))) {
       //console.info(item.title.substring(0, 1));
        filtered.push(item);
      }
    }
    
    return filtered;
  };
  
});