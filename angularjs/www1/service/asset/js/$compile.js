;
(function () {
    angular.module('compileApp', ['ngAnimate', 'uiSwitch', 'ui.bootstrap'])
        .controller('CompileController', function ($scope, $compile) {
            $scope.htmlContent = '';
            $scope.name = 'Alvin';

            $scope.compile = function () {
                var elem = $compile('<a href>{{name}}</a>')($scope);
                angular.element(document.getElementsByClassName('compile-result')).append(elem);
            };
        });
})();