app.controller('InfoController', 
               ['$scope', 'ImgService', 'TxtService', function($scope, ImgService, TxtService) {
    $scope.sections = 
        [   
            {
                name:'quienes',
                rightimg:14,
                imcaption: 'fine.'
            },
            {
                name: 'que',
                rightimg:20,
                imcaption: 'changing'
            },
            {
                name:'como',
                rightimg:24,
                imcaption:'awesome'
            }
        ]
    
    $scope.thisSection = 
                    {
                        name:'como',
                        rightimg:'',
                        imcaption:''
                    }   
    
    $scope.getData = function(section){
        var sectionData = $scope.sections.filter(function(item) { 
            return (item.name === section);})[0];
        $scope.thisSection.imcaption = sectionData.imcaption
        $scope.thisSection.rightimg = ImgService.getImage(sectionData.rightimg);
        TxtService.getTxt(sectionData.name)
            .success(function(data) { 
            $scope.thisSection.content = data; 
        });
    }
                   
    $scope.goToSection = function(section){
        $("#section, #caption").fadeOut(0);
        $scope.getData(section);
        $("#section, #caption").fadeIn()
    }
}]);