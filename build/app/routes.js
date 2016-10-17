(function() {
    'use strict';

    angular.module('application')

    .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider) {

        $stateProvider

            .state('game', {
                url: '/',
                templateUrl: './app/components/game/game-view.html',
                controller: 'GameController',
                controllerAs: 'Game'
            })

        $urlRouterProvider.otherwise('/');
    }]);

})();