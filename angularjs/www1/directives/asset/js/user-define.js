;
(function () {
    angular.module('userDefineApp', ['ngAnimate', 'uiSwitch', 'ui.bootstrap'])
        /**
         * 定义一个基本'指令'
         */
        .directive('aqTestBasic', function () {
            return {
                'template': function (elem, attr) {
                    return '<div class="alert alert-' + attr['class'] + '">' +
                        '<strong>Name: </strong>{{user.name}}, ' +
                        '<strong>Phone: </strong>{{user.phone}}</div>';
                },
                'link': function (scope, element, attrs) {
                    scope.$watch('form.style', function (newVal, oldVal) {
                        scope.user.style = newVal;
                    });
                }
            };
        })
        .controller('UserDefineController', function ($scope) {
            $scope.user = {
                'name': 'Alvin',
                'phone': '13000000000',
                'style': 'success'
            };
            $scope.form = {
                'style': 'success'
            };
            $scope.history = [];

            $scope.changeUser = function () {
                angular.copy($scope.form, $scope.user);
            };
        });
})();