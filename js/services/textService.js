app.factory('TxtService', ['$http', 
                     function($http){
                         return {
                             getTxt: function(section){
                                 return $http.get('https://s3-us-west-2.amazonaws.com/content-angular-surgeon/' + section + '.txt')

                                 .success(function(data){
                                     return data;
                                 })
                                 .error(function(err) {
                                     return "Lorem ipsum doloret sub amet";
                                 });
                             }
                        };
                     }]);