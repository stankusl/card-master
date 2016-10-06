(function() {
    'use strict';
    angular.module('application').controller('GameController', function($rootScope, $scope, $log, $q, GameServices) {
        self = this;
        $rootScope.pageTitle = 'Home';

        self.cards = {};

        GameServices.getCards().then(function(data) {
          self.cards = data;
        });



    });
})();
