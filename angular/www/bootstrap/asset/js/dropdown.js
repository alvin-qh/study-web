;
(function () {
    angular.module('dropdownApp', ['ngAnimate', 'ui.bootstrap'])
        .controller('DropdownController', function ($scope, $uibModal) {
            $scope.items = ['Item 1', 'Item 2', 'Item 3', '-', 'Item 4'];
            $scope.status = 'CLOSED';
            $scope.isOpen = true;

            $scope.toggled = function (open) {
                $scope.status = open ? 'OPEN' : 'CLOSED';
            };

            $scope.toggleDropdown = function ($event) {
                $event.preventDefault();
                $event.stopPropagation();
                $scope.isOpen = !$scope.isOpen;
            };

            $scope.itemClick = function (item) {
                if (typeof item !== 'string') {
                    item = angular.element(item.target).text();
                }
                $uibModal.open({
                    templateUrl: 'alertModal.html',
                    controller: 'AlertModalController',
                    resolve: {
                        item: function () {
                            return item;
                        }
                    }
                });
            };

        })

        /**
         * 过滤器, 用于输出带HTML标签的文本（不转义）
         */
        .filter('html', function ($sce) {
            return function (text) {
                return $sce.trustAsHtml(text);
            }
        })

        /**
         * 对话框的Controller
         */
        .controller('AlertModalController', function ($scope, $uibModalInstance, item) {
            $scope.close = function () {
                $uibModalInstance.dismiss();
            };
            $scope.content = '<strong>' + item + '</strong>' + " is selected";
            $scope.title = 'Item selected';
        });
})();