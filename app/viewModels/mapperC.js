(function mapperCScope(angular) {
    'use strict';

    var app = angular.module('con-rest');

    app.controller('mapperC', function mapperC($scope, mapperDAO) {
        $scope.name = null;
        $scope.maps = [];

        $scope.save = function save() {
            mapperDAO.create($scope.name, $scope.maps)
                .then(function cleanScope() {
                    $scope.name = null;
                    $scope.maps = [];
                });
        };
    });
}(window.angular));
