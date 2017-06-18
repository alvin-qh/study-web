;
(function () {
    angular.module('buttonApp', ['ngAnimate', 'ui.bootstrap'])
        .controller('ButtonController', function ($scope) {
            $scope.checkResults = [];

            $scope.$watchCollection('checkModel', function () {
                $scope.checkResults = [];
                angular.forEach($scope.checkModel, function (value, key) {
                    if (value) {
                        $scope.checkResults.push(key);
                    }
                });
            });
        });
})();