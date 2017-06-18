;
(function () {
    angular.module('memoApp', ['ui.bootstrap'])
        .controller('MemoListController', function ($scope) {

        })
        .controller('MemoAddModalController', function ($scope, $uibModal) {
            $scope.open = function (size) {
                $uibModal.open({
                    animation: true,
                    templateUrl: 'addModal.html',
                    controller: 'AddModalInstanceController',
                    size: size
                });
            };
        })
        .controller('AddModalInstanceController', function ($scope, $uibModalInstance) {
            $scope.ok = function () {
                $uibModalInstance.close();
            };
            $scope.cancel = function () {
                $uibModalInstance.dismiss('cancel');
            };
        })
        .controller('DatepickerController', function ($scope) {

        });
})();