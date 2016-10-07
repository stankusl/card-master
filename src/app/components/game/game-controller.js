(function() {
    'use strict';
    angular.module('application').controller('GameController', function($rootScope, $scope, $log, $q, GameServices) {
        self = this;
        $rootScope.pageTitle = 'Home';

        self.cards = {};
        self.filterSuit = 'All';


        self.processData = function(rawArray) {
          var result = {};

          angular.forEach(rawArray, function(value, key) {
              var card;

              if (value != 'B' && value != 'R') {
                card = value.split("-");
                result[key] = { "rank" : card[0], "type" : card[1] };
              } else {
                result[key] = { "rank" : value, "type" : 'J' }
              }
          });

          return result;
        }

        GameServices.getCards().then(
          function(result) {
              var processed = self.processData(result);
              self.cards = processed;
          },
          function(err) {
              console.log('Error retrieving from endpoint: ', err);
          }
        );


    });
})();
