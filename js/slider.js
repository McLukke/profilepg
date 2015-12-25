// slider
var ProfileWebsite = angular.module('ProfileWebsite', ['ngTouch']);

ProfileWebsite.controller('SliderCtrl', ['$scope', function($scope) {
  $scope.slides = [
    {image : 'images/kenny_portrait.jpg', description : 'Image 00'},
    {image : 'images/kenny_bg.jpg', description : 'Image 01'},
    {image : 'images/aveconcept.png', description : 'Image 02'},
    {image : 'images/public_art_hk.png', description : 'Image 03'},
    {image : 'images/willey_printing.png', description : 'Image 04'}
  ];
}]);
