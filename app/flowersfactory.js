angular.module("calculatorApp")
.value('urlFlowers', 'https://dmm888enhanced.apphb.com/api/apicode/getflowers')
.factory("getFlowers", function($http, urlFlowers) {

   // Revealing Module pattern
   return {
     allFlowers: function() {
       return $http.get(urlFlowers, {
         cache: false
       });

       

     },
   };

 });
