;
(function () {
    angular.module('datepickerApp', ['ngLocale', 'ngAnimate', 'ui.bootstrap'])
        .controller('DatepickerController', function ($scope) {
            $scope.dt = new Date();
            $scope.dpMode = $scope.disabledMode = 'day';
            $scope.disableValue = 0;

            $scope.clearDateRange = function () {
                $scope.minDate = $scope.maxDate = null;
            };

            $scope.clearDisabled = function () {
                $scope.disabledMode = 'day';
                $scope.disableValue = 0;
            };

            $scope.getDayClass = function (date, mode) {
                if (mode === 'day') {
                    var dayToCheck = new Date(date).setHours(0, 0, 0, 0);

                    for (var i = 0; i < $scope.events.length; i++) {
                        var currentDay = new Date($scope.events[i].date).setHours(0, 0, 0, 0);

                        if (dayToCheck === currentDay) {
                            return $scope.events[i].status;
                        }
                    }
                }

                return '';
            };
        });
})();