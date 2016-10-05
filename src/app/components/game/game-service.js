(function() {
    'use strict';

    angular.module('application').factory('GameServices', ['$http', '$q', '$log', '$rootScope', GameServices]);

    function GameServices($http, $q, $log, $rootScope) {

        // Retrieving available Cards
        var endpoint = 'http://188.166.154.233/public/cards/all';

        return {
            getCards: getCards
        };

        //getClients
        function getCards() {
            var deferred = $q.defer();
            $http({
                    method: "GET",
                    url: endpoint,
                })
                .$promise.then(function(response) {
                    deferred.resolve(response);
                })
                .catch(function(response) {
                    $log.error('Error retrieving Clients: ' + response.statusText);
                    return $q.reject('Error retrieving Clients.');
                });
            return deferred.promise;
        };
    }


})();
