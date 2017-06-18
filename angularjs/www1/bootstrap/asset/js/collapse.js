;
(function () {
    angular.module('collapseApp', ['ngAnimate', 'ui.bootstrap'])
        .controller('CollapseController', function ($scope) {
            $scope.isCollapsed = false;

            $scope.collapseClick = function() {
                $scope.isCollapsed = !$scope.isCollapsed;
            };
        });
})();