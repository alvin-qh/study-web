;
(function () {
    angular.module('userDefineApp', ['ngAnimate', 'uiSwitch', 'ui.bootstrap'])
        /**
         * 定义一个基本'指令'
         */
        .directive('aqTestBasic', function () {
            return {
                'template': function (elem, attr) {
                    console.log(attr);
                    return '<div class="alert alert-' + attr['class'] + '">' +
                        '<strong>Name: </strong>{{user.name}}, ' +
                        '<strong>Phone: </strong>{{user.phone}}</div>';
                }
            };
        })
        .directive('aqTestLink', function () {
            return {
                'link': function (scope, element, attrs) {

                }
            };
        })
        .directive('aqTestLink', function () {
            return {
                'link': function (scope, element, attrs) {

                }
            };
        })
        .controller('UserDefineController', function ($scope) {
            $scope.user = {
                'name': 'Alvin',
                'phone': '13000000000'
            };
        });
})();