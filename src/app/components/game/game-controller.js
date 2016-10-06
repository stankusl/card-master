(function() {
    'use strict';
    angular.module('application').controller('GameController', function($rootScope, $scope, $log, $q, GameServices) {
        self = this;
        $rootScope.pageTitle = 'Home';

        self.cards = {};
        //GameServices.getCards();
      //  console.log(GameServices.getCards());
        GameServices.getCards().then(
            function(result) {
                self.cards = result;
            },
            function(err) {
                console.log('Error retrieving from endpoint: ', err);
            });


    });
})();
