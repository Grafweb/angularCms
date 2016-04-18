"use strict";

app.filter('filtersGalery',function() {
    
 return function (fotos, category) {
   
   /*debugger;*/
  // console.info("searchTitle" + searchTitle.title);
   
   var filtered = [];
   
  // console.info('przefiltrowande');
  //console.dir(fotos);
    
	   //foreCH
    //  var searchLenght =  searchTitle.lenght;
    // var letterMatch = new RegExp(searchTitle, 'i');
     for (var i = 0; i < fotos.length; i++) {
         
         //console.info("" + fotos[i]['category']);
         
         if(fotos[i]['category'] == category) filtered.push(fotos[i]); 
         
    //   var item = items[i];
    //   if (letterMatch.test(item.title.substring(0, searchLenght))) {
    //    //console.info(item.title.substring(0, 1));
    //     filtered.push(item);
    //   }
     }
     
    // console.dir(filtered);
    
    return filtered;
  };
  
});