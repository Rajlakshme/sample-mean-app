/**
 * Created by rvadivel on 2/15/2017.
 */
/*(function () {
    'use strict';

    myApp.directive('carDropdown', function(){
        return {
            restrict: 'E',
            controller: 'carDirectiveController',
            controllerAs: 'vm',
            template: 'Directive section vm.cars {{vm.cars}}<select ng-model="vm.selectedCar" ng-change="vm.parseCarData()">'+
                        '<option  ng-repeat="car in vm.cars" value="{{car}}">{{car.name}}</option>'+
                        '</select>'+
                        '<div ng-if="vm.selectedCar">'+
                        '<select ng-model="vm.selectedModel">'+
                'test : {{vm.selectedModel}}'+
                        '<option ng-repeat="model in vm.selectedCar.models" value="{{model}}">{{model.name}}</option>'+
                        '</select>'+
                        '<div ng-if="model.content">'+
                        '<img src="{{model.image}}">'+
                            '<p>{{model.content}}</p>'+
                        '</div>'+
                        '</div>'
        };
    });

})();*/

(function () {
    'use strict';

    myApp.directive('carDropdown', carDropdown);

    /** @ngInject **/
    function carDropdown(){
        var directive = {
            scope: {
                carData: '@'
            },
            /*templateUrl : '../views/car-directive.html',*/
            template:   '<select ng-model="vm.selectedCar" ng-change="vm.parseCarData()" style="margin: 20px;">'+
                        '<option selected disabled value="">Select your favourite car to know its models</option>'+
                        '<option  ng-repeat="car in vm.cars" value="{{car}}">{{car.name}}</option>'+
                        '</select>'+
                        '<div ng-if="vm.selectedCar">'+
                        '<select ng-model="vm.selectedModel" ng-change="vm.parseModelData()" style="margin: 20px;">'+
                        '<option selected disabled value="">Select your favourite model to know its description</option>'+
                        '<option ng-repeat="model in vm.selectedCar.models" value="{{model}}">{{model.name}}</option>'+
                        '</select>'+
                        '<div ng-if="vm.selectedModel.content" class="row">'+
                        '<div class="col-xs-2"><img src="{{vm.selectedModel.image}}" style="width:100%"></div>'+
                        '<p class="col-xs-10" style="margin-top: 30px;">{{vm.selectedModel.content}}</p>'+
                        '</div>'+
                        '</div>',
            controller:carDirectiveController,
            controllerAs:'vm',
            bindToController: true
        };

        return directive;

        /** @ngInject */
        function carDirectiveController(){
            var vm = this;
            vm.cars = JSON.parse(vm.carData);

            vm.parseCarData = function(){
                vm.selectedCar = JSON.parse(vm.selectedCar);
            };
            vm.parseModelData = function(){
                vm.selectedModel = JSON.parse(vm.selectedModel);
            };
        }
    }

})();



