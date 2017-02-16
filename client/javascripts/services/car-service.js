/**
 * Created by rvadivel on 2/15/2017.
 */
(function () {
    'use strict';

    myApp.factory('carService', carService);
    function carService($http,$q) {
        return {
            getCarData : getCarData
        };

        function getCarData(){
            var config = {
                url: '/api/cars',
                method: 'GET'
            };
            return $http(config);
        }
    }

})();
