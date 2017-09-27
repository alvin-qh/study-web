;
(function () {
    angular.module('modalApp', ['ngAnimate', 'uiSwitch', 'ui.bootstrap'])

        /**
         * 主界面的controller, $uibModal是用于弹出对话框的对象
         */
        .controller('ModalController', function ($scope, $uibModal, $log) {
            $scope.users = [
                {'name': 'Alvin', 'gender': 'M', 'phone': '13888888888'}
            ];
            $scope.size = '';
            $scope.animationsEnabled = true;

            /**
             * 显示对话框的方法
             */
            $scope.showAddModal = function () {
                var modalOpt = {
                    animation: $scope.animationsEnabled,
                    templateUrl: 'addModal.html',
                    controller: 'ModalInstanceController',
                    size: $scope.size,
                    resolve: {  // 传递给对话框实例controller的数据
                        users: function () {
                            return $scope.users;
                        }
                    }
                };

                // 打开对话框, 得到一个对话框实例
                $uibModal.open(modalOpt).result.then(function (form) {  // 当对话框确认后执行此方法
                    $log.info(form);
                }, function () {    // 当对话框取消后执行此方法
                    $log.info('Modal dismissed at: ' + new Date());
                });
            };

            /**
             * 删除一条信息
             * @param $index 要删除信息的序号
             */
            $scope.delete = function ($index) {
                var users = [];
                angular.forEach($scope.users, function (val, key) {
                    if (key != $index) {
                        users.push(val);
                    }
                });
                $scope.users = users;
            };
        })

        /**
         * 弹出框的Controller方法, 其中$scope的作用域范围仅限弹出框
         */
        .controller('ModalInstanceController', function ($scope, $uibModalInstance, users) {

            // 将前一个controller传递的参数赋予对话框的scope
            $scope.form = {
                'name': '',
                'gender': 'M'
            };

            /**
             * 确认按钮点击方法
             */
            $scope.ok = function () {
                users.push({
                    'name': $scope.form.name,
                    'gender': $scope.form.gender,
                    'phone': $scope.form.phone
                });
                $uibModalInstance.close($scope.form);
            };

            /**
             * 取消按钮点击方法
             */
            $scope.cancel = function () {
                $uibModalInstance.dismiss('cancel');
            };
        });
})();