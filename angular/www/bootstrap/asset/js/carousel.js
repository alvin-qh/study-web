;
(function () {
    angular.module('carouselApp', ['ngAnimate', 'uiSwitch', 'ui.bootstrap'])
        .controller('CarouselController', function ($scope) {
            $scope.interval = 1000;
            $scope.noWrapSlides = false;
            $scope.disableSlideLooping = false;
            $scope.slides = [
                {image: 'asset/img/1.jpg', text: '湿地公园1'},
                {image: 'asset/img/2.jpg', text: '湿地公园2'},
                {image: 'asset/img/3.jpg', text: '湿地公园3'},
                {image: 'asset/img/4.jpg', text: '湿地公园4'},
                {image: 'asset/img/5.jpg', text: '湿地公园5'},
                {image: 'asset/img/6.jpg', text: '湿地公园6'}
            ];
            $scope.eachSlide = {
                image: '',
                text: ''
            };

            $scope.addNewSlide = function () {
                $scope.slides.push({
                    image: '' + $scope.eachSlide.image,
                    text: '' + $scope.eachSlide.text
                });
            };
        });
})();