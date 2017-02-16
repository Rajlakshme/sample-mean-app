/**
 * Created by rvadivel on 2/14/2017.
 */

myApp.controller('carController', ['$scope','carService',
    function($scope, carService){
       // var Cars = $resource('/api/cars');
        //var vm = this;
        $scope.cars =  [
            {
                name: 'Ford',
                models:[{
                        name:'Edge',
                        image:'http://static.usnews.rankingsandreviews.com/images/Auto/izmo/i6336198/2017_ford_edge_angularfront.jpg',
                        content:'The Ford Edge is a mid-sized crossover SUV manufactured by Ford. The first generation Edge is based on the Ford CD3 platform shared with the first generation Ford Fusion, Mazda CX-9, first & second generation Mazda 6 and Lincoln MKX. Along with a rebadged premium variant, the Lincoln MKX, the Edge , is manufactured at Ford Oakville Assembly Complex in Oakville, Ontario, Canada.'
                    },
                    {
                        name:'Escape',
                        image:'http://static.usnews.rankingsandreviews.com/images/Auto/izmo/i6336198/2017_ford_edge_angularfront.jpg',
                        content:''
                    }
                ]
            },
            {
                name: 'Acura',
                models:[{
                        name:'ILX',
                        image:'http://static.usnews.rankingsandreviews.com/images/Auto/izmo/i6336198/2017_ford_edge_angularfront.jpg',
                        content:''
                    },
                    {
                        name:'MDX',
                        image:'http://static.usnews.rankingsandreviews.com/images/Auto/izmo/i6336198/2017_ford_edge_angularfront.jpg',
                        content:''
                    }]
            }];
        $scope.selectedCar = {};
        $scope.selectedModel = {};

        /*$scope.parseModelData = function(selectedModel){
            console.log(typeof($scope.selectedModel));
            console.log($scope.selectedModel);
        };*/

        /*carService.getCarData().then(function(result){
            console.log('result');
            console.log(result);
        });

*/
}]);
