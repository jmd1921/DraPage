app.factory('ImgService', ['$http', 
                     function($http){
                         return {
                             getImage: function(imgid){
                                 return 'https://s3-us-west-2.amazonaws.com/content-angular-surgeon/media/image' 
                                 + imgid + '.png'
                             }
                         };
                     }]);