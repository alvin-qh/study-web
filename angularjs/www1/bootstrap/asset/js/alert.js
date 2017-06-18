;
(function () {
    angular.module('alertApp', ['ngAnimate', 'ui.bootstrap'])
        .controller('AlertController', function ($scope) {
            $scope.singleAlertMessage = "Hello";

            $scope.closeSingleAlert = function () {
                $scope.singleAlertMessage = null;
            };

            $scope.types = ['info', 'success', 'danger', 'warning'];
            $scope.chooseType = $scope.types[0];
            $scope.alerts = [];

            $scope.addAlert = function () {
                $scope.alerts.push({type: $scope.chooseType, message: $scope.chooseMessage});
            };

            $scope.deleteAlert = function (index) {
                var oldAlerts = $scope.alerts;
                $scope.alerts = [];
                angular.forEach(oldAlerts, function (alert, n) {
                    if (n != index) {
                        $scope.alerts.push(alert);
                    }
                });
            };
        });
})();