(function() {
    'use strict';
    angular.module('application', ['ui.bootstrap', 'btford.socket-io', 'ui.router', 'rzModule'])

    .run(['$rootScope', '$state', function($rootScope, $state) {

        // this is available from all across the app
        $rootScope.appName = 'Card Game';
        // make $state available from templates
        $rootScope.$state = $state;
    }])

    .factory('mySocket', function (socketFactory) {
      var mySocket = socketFactory();
      mySocket.forward('error');
      return mySocket;
    })

    .config(['$locationProvider', function($locationProvider) {
        $locationProvider.html5Mode(true);
    }])

    .config(['$httpProvider', function($httpProvider) {

        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
        if (!$httpProvider.defaults.headers.get) {
            $httpProvider.defaults.headers.get = {};
        }
    }])

})();