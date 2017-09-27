;
(function () {

    angular.module('todoApp', [])
        .controller('TodoListController', ['$scope', function ($scope) {
            $scope.todo = {
                /**
                 * 项目集合
                 */
                'items': [
                    {'text': 'Lean angular', 'done': true},
                    {'text': 'Build an angular app', 'done': false}
                ],
                /**
                 * 计算已完成项目的数量
                 * @returns {number} 已完成项目的数量
                 */
                remaining: function () {
                    var count = 0;
                    angular.forEach($scope.todo.items, function (todo) {
                        count += todo.done ? 0 : 1;
                    });
                    return count;
                },
                /**
                 * 删除已完成的项目
                 */
                archive: function () {
                    var oldItems = $scope.todo.items;
                    $scope.todo.items = [];
                    angular.forEach(oldItems, function (todo) {
                        if (!todo.done) {
                            $scope.todo.items.push(todo);
                        }
                    });
                },
                /**
                 * 添加新项目到集合
                 */
                addToList: function () {
                    if ($scope.todoText !== '') {
                        $scope.todo.items.push({'text': $scope.todo.todoText, 'done': false});
                        $scope.todo.todoText = '';
                    }
                }
            };
        }]);
})();