;
(function () {
    angular.module('popoverApp', ['ngAnimate', 'uiSwitch', 'ui.bootstrap'])
        .controller('PopoverController', function ($scope) {
            $scope.dynamicPopover = {
                'title': '',
                'content': 'Popover demo',
                'placement': 'top',
                'animation': true,
                'isOpen': false,
                'autoHide': true
            };
        });
})();