(function() {
    'use strict';

    angular.module('application').factory('GameServices', ['$http', '$q', '$log', '$rootScope', GameServices]);

    function GameServices($http, $q, $log, $rootScope) {

        // Retrieving available Cards
        var endpoint = 'http://188.166.154.233/public/cards/';

        return {
            getCards: getCards,
            getSuffledCards: getSuffledCards
        };

        //getCards
        function getCards() {
            var deferred = $q.defer();

            $http({
                    method: "GET",
                    url: endpoint + 'all'
                })
                .then(function(response) {
                    deferred.resolve(response.data);
                })
                .catch(function(response) {
                    $log.error('Error retrieving Clients: ' + response.statusText);
                    return $q.reject('Error retrieving Clients.');
                });

            return deferred.promise;
        }

        //  getCardsRandom
        function getSuffledCards() {
            var deferred = $q.defer();

            $http({
                    method: "GET",
                    url: endpoint + 'random'
                })
                .then(function(response) {
                    deferred.resolve(response.data);
                })
                .catch(function(response) {
                    $log.error('Error retrieving Clients: ' + response.statusText);
                    return $q.reject('Error retrieving Clients.');
                });
            return deferred.promise;
        };

    };
})();